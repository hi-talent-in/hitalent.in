/* eslint-disable react/prop-types */
import { Button, Modal, Table } from "antd";
import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const SkillTable = (props) => {
  const { currentLang, currentTrack, levelProgress } = props;
  const [modalOpen, setModalOpen] = useState(false);

  const popoverPoints = (
    <>
      <Modal
        mask={false}
        title="Info"
        closable={false}
        centered
        open={modalOpen}
        width={420}
        footer={[
          <Button
            key="cancel"
            onClick={() => setModalOpen(false)}
            className="hover:!bg-transparent"
          >
            Close
          </Button>,
        ]}
      >
        <div>
          <ol className="p-2">
            <li>
              Get points by completing respective skill path and it{"'"}s
              contents.
            </li>
            <li>
              These points will increase level corresponding to it{"'"}s skill.
            </li>
          </ol>
        </div>
      </Modal>
      <Link onClick={() => setModalOpen(true)} className="text-sky-700">
        <AiOutlineInfoCircle />
      </Link>
    </>
  );

  const columns = [
    {
      title: <small>Skill</small>,
      dataIndex: "skill",
      key: "skill",
      render: (text) => <small>{text}</small>,
    },
    {
      title: <small>Points</small>,
      dataIndex: "points",
      key: "points",
      align: "center",
      render: (text) => <small>{text || 0}</small>,
    },
    {
      title: (
        <h6 className="text-2xl font-semibold">
          <p className="flex flex-row gap-1 items-center text-sm justify-center">
            <small>Level</small> {popoverPoints}
          </p>
        </h6>
      ),
      dataIndex: "level",
      key: "level",
      align: "center",
      render: (text) => <small>{text || 0}</small>,
    },
  ];

  const data = [
    {
      key: 1,
      skill: "Total",
      points: levelProgress?.total?.points,
      level: levelProgress?.total?.level,
    },
    currentLang === "python"
      ? {
          key: 2,
          skill: "Python",
          points: levelProgress?.python?.points,
          level: levelProgress?.python?.level,
        }
      : currentLang === "javascript"
      ? {
          key: 3,
          skill: "JavaScript",
          points: levelProgress?.javascript?.points,
          level: levelProgress?.javascript?.level,
        }
      : currentLang === "java"
      ? {
          key: 4,
          skill: "Java",
          points: levelProgress?.java?.points,
          level: levelProgress?.java?.level,
        }
      : null,
    currentLang === "java"
      ? {
          key: 5,
          skill: "Spring Boot",
          points: levelProgress?.["spring boot"]?.points,
          level: levelProgress?.["spring boot"]?.level,
        }
      : null,
    (currentTrack === "frontend" || currentTrack === "fullstack") &&
    currentLang === "python"
      ? {
          key: 6,
          skill: "JavaScript",
          points: levelProgress?.javascript?.points,
          level: levelProgress?.javascript?.level,
        }
      : null,
    {
      key: 7,
      skill: "Git",
      points: levelProgress?.git?.points,
      level: levelProgress?.git?.level,
    },
    currentTrack === "frontend" || currentTrack === "fullstack"
      ? {
          key: 8,
          skill: "HTML",
          points: levelProgress?.html?.points,
          level: levelProgress?.html?.level,
        }
      : null,
    currentTrack === "frontend" || currentTrack === "fullstack"
      ? {
          key: 9,
          skill: "CSS",
          points: levelProgress?.css?.points,
          level: levelProgress?.css?.level,
        }
      : null,
    currentTrack === "frontend" || currentTrack === "fullstack"
      ? {
          key: 10,
          skill: "ReactJS",
          points: levelProgress?.reactjs?.points,
          level: levelProgress?.reactjs?.level,
        }
      : null,
    {
      key: 11,
      skill: "English",
      points: levelProgress?.english?.points,
      level: levelProgress?.english?.level,
    },
    {
      key: 12,
      skill: "Agile",
      points: levelProgress?.agile?.points,
      level: levelProgress?.agile?.level,
    },
    currentTrack === "backend" || currentTrack === "fullstack"
      ? {
          key: 13,
          skill: "Database",
          points: levelProgress?.database?.points,
          level: levelProgress?.database?.level,
        }
      : null,
    (currentTrack === "backend" || currentTrack === "fullstack") &&
    currentLang === "python"
      ? {
          key: 14,
          skill: "FastAPI",
          points: levelProgress?.fastapi?.points,
          level: levelProgress?.fastapi?.level,
        }
      : null,
    (currentTrack === "backend" || currentTrack === "fullstack") &&
    currentLang === "javascript"
      ? {
          key: 15,
          skill: "NodeJS",
          points: levelProgress?.nodejs?.points,
          level: levelProgress?.nodejs?.level,
        }
      : null,
    (currentTrack === "backend" || currentTrack === "fullstack") &&
    currentLang === "javascript"
      ? {
          key: 16,
          skill: "ExpressJS",
          points: levelProgress?.expressjs?.points,
          level: levelProgress?.expressjs?.level,
        }
      : null,
  ].filter(Boolean); // Removes null entries from the array

  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={false}
      size="small"
    />
  );
};

export default SkillTable;
