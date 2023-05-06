import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
} from "@mui/material";
import { Button, Modal } from "antd";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const SkillTable = (props) => {
  const { currentLang, currentTrack, levelProgress } = props;
  const [modalOpen, setModalOpen] = React.useState(false);

  const tableRow = (n, p, l) => (
    <TableRow>
      <TableCell align="left">
        <h6 className="text-xl font-serif">{n}</h6>
      </TableCell>
      <TableCell align="center">
        <h6 className="text-xl font-serif">{p || 0}</h6>
      </TableCell>
      <TableCell align="center">
        <h6 className="text-xl font-serif">{l || 0}</h6>
      </TableCell>
    </TableRow>
  );

  const popoverPoints = (
    <>
      <Modal
        mask={false}
        title="Info"
        closable={false}
        centered
        open={modalOpen}
        width={420}
        maskClosable={false}
        footer={[
          <Button
            key="cancel"
            onClick={() => setModalOpen(false)}
            className="hover:bg-transparent"
          >
            Cancel
          </Button>,
        ]}
      >
        <div>
          <ol className="p-2">
            <li className="text-2xl font-serif p-0 m-0">
              Get points by completing respective skill path and it's contents.
            </li>
            <li className="text-2xl font-serif p-0 m-0">
              These points will increase level corresponding to it's skill.
            </li>
          </ol>
        </div>
      </Modal>
      <Link
        onClick={() => setModalOpen(true)}
        className="text-2xl text-sky-600 underline font-semibold"
      >
        <AiOutlineInfoCircle />
      </Link>
    </>
  );

  return (
    <TableContainer component={Paper} style={{ maxHeight: "16em" }}>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell className="text-3xl" align="center">
              <small className="font-serif m-0 text-xl font-semibold">
                Skill
              </small>
            </TableCell>
            <TableCell align="center">
              <small className="font-serif m-0 text-xl font-semibold">
                Points
              </small>
            </TableCell>
            <TableCell align="center">
              <h6 className="text-2xl font-semibold">
                <small className="font-serif flex flex-row items-center m-0 text-xl font-semibold">
                  Level {popoverPoints}
                </small>
              </h6>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRow(
            "Total",
            levelProgress?.total?.points,
            levelProgress?.total?.level
          )}
          {currentLang === "python"
            ? tableRow(
                "Python",
                levelProgress?.python?.points,
                levelProgress?.python?.level
              )
            : currentLang === "javascript"
            ? tableRow(
                "JavaScript",
                levelProgress?.javascript?.points,
                levelProgress?.javascript?.level
              )
            : currentLang === "java"
            ? tableRow(
                "Java",
                levelProgress?.java?.points,
                levelProgress?.java?.level
              )
            : null}
          {currentLang === "java"
            ? tableRow(
                "Spring Boot",
                levelProgress?.["spring boot"]?.points,
                levelProgress?.["spring boot"]?.level
              )
            : null}
          {(currentTrack === "frontend" || currentTrack === "fullstack") &&
          currentLang === "python"
            ? tableRow(
                "JavaScript",
                levelProgress?.javascript?.points,
                levelProgress?.javascript?.level
              )
            : null}
          {tableRow(
            "Git",
            levelProgress?.git?.points,
            levelProgress?.git?.level
          )}
          {currentTrack === "frontend" || currentTrack === "fullstack"
            ? tableRow(
                "HTML",
                levelProgress?.html?.points,
                levelProgress?.html?.level
              )
            : null}
          {currentTrack === "frontend" || currentTrack === "fullstack"
            ? tableRow(
                "CSS",
                levelProgress?.css?.points,
                levelProgress?.css?.level
              )
            : null}
          {currentTrack === "frontend" || currentTrack === "fullstack"
            ? tableRow(
                "ReactJS",
                levelProgress?.reactjs?.points,
                levelProgress?.reactjs?.level
              )
            : null}
          {tableRow(
            "English",
            levelProgress?.english?.points,
            levelProgress?.english?.level
          )}
          {tableRow(
            "Agile",
            levelProgress?.agile?.points,
            levelProgress?.agile?.level
          )}
          {currentTrack === "backend" || currentTrack === "fullstack"
            ? tableRow(
                "Database",
                levelProgress?.database?.points,
                levelProgress?.database?.level
              )
            : null}
          {(currentTrack === "backend" || currentTrack === "fullstack") &&
          currentLang === "python"
            ? tableRow(
                "FastAPI",
                levelProgress?.fastapi?.points,
                levelProgress?.fastapi?.level
              )
            : null}
          {(currentTrack === "backend" || currentTrack === "fullstack") &&
          currentLang === "javascript"
            ? tableRow(
                "NodeJS",
                levelProgress?.nodejs?.points,
                levelProgress?.nodejs?.level
              )
            : null}
          {(currentTrack === "backend" || currentTrack === "fullstack") &&
          currentLang === "javascript"
            ? tableRow(
                "ExpressJS",
                levelProgress?.expressjs?.points,
                levelProgress?.expressjs?.level
              )
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SkillTable;
