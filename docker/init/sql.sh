#!/bin/bash

set -e
set -u

function create_user_and_database() {
    local database=$1
    echo "  Creating user and granting privileges on database '$database' to user '$POSTGRES_USER'"
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
        DO
\$do\$
BEGIN
   IF EXISTS (
      SELECT FROM pg_catalog.pg_roles
      WHERE  rolname = '$POSTGRES_USER') THEN

      RAISE NOTICE 'Role "$POSTGRES_USER" already exists. Skipping.';
   ELSE
      BEGIN   -- nested block
         CREATE ROLE $POSTGRES_USER LOGIN PASSWORD 'my_password';
      EXCEPTION
         WHEN duplicate_object THEN
            RAISE NOTICE 'Role "$POSTGRES_USER" was just created by a concurrent transaction. Skipping.';
      END;
   END IF;
END
\$do\$;
        CREATE DATABASE $database;
        GRANT ALL PRIVILEGES ON DATABASE $database TO $POSTGRES_USER;
EOSQL
}

if [ -n "$POSTGRES_MULTIPLE_DATABASES" ]; then
    echo "Multiple database creation requested: $POSTGRES_MULTIPLE_DATABASES"
    for db in $(echo $POSTGRES_MULTIPLE_DATABASES | tr ',' ' '); do
        create_user_and_database $db
    done
    echo "Multiple databases created"
fi
