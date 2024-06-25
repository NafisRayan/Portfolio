import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ytDownloader from "../../Assets/Projects/ytDownloader.png";
import yoloEYE from "../../Assets/Projects/yoloEYE.png";
import chatCom from "../../Assets/Projects/chatCom.png";
import aiPlayground from "../../Assets/Projects/aiPlayground.png";
import handControl from "../../Assets/Projects/handControl.png";
import reactBrowser from "../../Assets/Projects/reactBrowser.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiPlayground}
              isBlog={false}
              title="AI Playground: Unleash Your Creative Spark!"
              description="Embark on an AI-driven journey of creativity and exploration with this captivating Streamlit application. Enter your prompts and let the power of Generative AI weave stories, compose poems, generate code snippets, and more. Delve into the realm of imagination, where AI serves as your co-creator, transforming your ideas into tangible expressions."
              ghLink="https://github.com/NafisRayan/AI-Playground"
              demoLink="https://ai-playground-5wwl.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactBrowser}
              isBlog={false}
              title="ReactNative-Browser"
              description="This React Native mobile browser application offers users a customized browsing experience on their mobile devices. Key features include web content display using the WebView component, URL navigation (both direct entry and search queries), navigation controls (back, forward, reload, stop), bookmark management, browsing history tracking, profile customization, font size adjustment, and pinch-to-zoom functionality. The app leverages React Native, Expo, React Native Vector Icons, and React Native WebView."
              ghLink="https://github.com/NafisRayan/ReactNative-Browser"
              demoLink="https://github.com/NafisRayan/ReactNative-Browser"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={handControl}
              isBlog={false}
              title="ThreeJS Hand Control Panel"
              description="The project is designed to create an interactive 3D visualization of hand landmarks detected in real-time from a video stream, using the MediaPipe Hands model and THREE.js for 3D rendering. It dynamically updates the positions of 3D objects representing hand landmarks based on the detected landmarks, adjusts the camera's position to follow the hand movements, and includes logic to recognize specific hand gestures. The visualization is rendered in a web environment, allowing users to see the hand landmarks in 3D space as they move their hands in front of the camera."
              ghLink="https://github.com/NafisRayan/ThreeJS-Hand-Control-Panel"
              demoLink="https://nafisrayan.github.io/ThreeJS-Hand-Control-Panel/"
            />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatCom}
              isBlog={false}
              title="Chat Application: A Flask and Socket.IO-Based Chat Platform"
              description="This open-source repository houses the code for a versatile chat application developed using Flask and Socket.IO. Key features include user registration, login, participation in a global chat room, private messaging, and message history viewing. The app provides a seamless communication experience for users."
              ghLink="https://github.com/NafisRayan/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ytDownloader}
              isBlog={false}
              title="YouTube Downloader"
              description="This project is a simple yet powerful tool designed to download videos from YouTube in either MP4 or MP3 formats. It leverages the Flask framework for its web interface and uses the PyTube library to handle the downloading process."
              ghLink="https://github.com/NafisRayan/YT-Downloader"
              demoLink="https://github.com/NafisRayan/YT-Downloader"
            />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yoloEYE}
              isBlog={false}
              title="yoloEYE: Real-time Object Detection with Streamlit and YOLO Models"
              description="This project utilizes YOLO (You Only Look Once) models for object detection tasks. It provides a user-friendly interface built with Streamlit, allowing users to easily upload images or video streams to see object detections in real-time. The application supports various YOLO models, including YOLOv8, YOLOv9, and YOLOv10; offering flexibility and accuracy in detecting objects across different scenarios."
              ghLink="https://github.com/NafisRayan/yoloEYE"
              demoLink="https://huggingface.co/spaces/vaugheu/yoloEYE"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
