// pages/index.tsx
import Image from "next/image";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-28">
        <div className="z-10 max-w-5xl w-full flex items-center justify-center font-mono lg:flex">
          <p className="mb-8 mx-auto flex w-full justify-center text-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-base md:text-lg lg:text-xl xl:text-2xl">
            Anishkumar Pankajkumar Patel - Blockchain Development Student
          </p>
        </div>

        {/* Image Section */}
        <div className="max-w-5xl w-full mx-auto flex justify-center">
          <Image
            src="/images/Anish.jpg"
            alt="Anishkumar Pankajkumar Patel"
            width={250}
            height={250}
            className="rounded-full border border-gray-300 shadow-lg"
          />
        </div>

        {/* Profile Section */}
        <div
          id="profile"
          className="section mb-32 text-center lg:max-w-5xl w-full mx-auto lg:mb-0"
        >
          <h2 className="mb-3 text-2xl font-semibold">Profile</h2>
          <p
            className="text-sm opacity-50 mx-auto"
            style={{ maxWidth: "100%" }}
          >
            Hello! I am Anishkumar Pankajkumar Patel, a dedicated Blockchain
            Development student at George Brown College, seeking opportunities
            to contribute and grow in the field of blockchain technology. With a
            solid foundation in programming languages like C++, C#, Python,
            Java, JavaScript, and Solidity, I am eager to apply my skills to
            support company objectives and achieve professional growth. My
            toolkit includes proficiency in Docker, NodeJS, GitHub, Agile
            methodologies, and a range of other technologies and tools critical
            to modern software development. My experience extends to developing
            full-stack applications, managing databases, and contributing to
            collaborative team projects. Whether it&apos;s a hackathon challenge
            or a group assignment, I am committed to delivering solutions that
            are not only functional but also advance the goals of the
            organization. Let&apos;s explore how we can collaborate on
            innovative projects in the blockchain arena.
          </p>
        </div>

        {/* Skills Section */}
        <div
          id="skills"
          className="section mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 z-10"
        >
          <h2 className="text-2xl font-semibold mb-3 text-white">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 bg-black p-4 rounded-xl border border-gray-300">
            {/* Programming Languages */}
            <div className="text-white font-mono flex flex-col items-center">
              <h3 className="font-bold">Programming Languages</h3>
              <ul className="w-full">
                {/* C++ */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/c-plusplus.png"
                      alt="C++ Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>C++</span>
                </li>

                {/* C */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/c.png"
                      alt="C Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>C</span>
                </li>

                {/* C# */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/c-sharp.png"
                      alt="C# Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>C#</span>
                </li>

                {/* Python */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/python.png"
                      alt="Python Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>Python</span>
                </li>

                {/* Java */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/java.png"
                      alt="Java Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>Java</span>
                </li>

                {/* JavaScript */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/js.png"
                      alt="JavaScript Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>JavaScript</span>
                </li>

                {/* Solidity */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-400 rounded">
                    <Image
                      src="/images/logos/solidity_logo.svg"
                      alt="Solidity Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>Solidity</span>
                </li>
              </ul>
            </div>

            {/* Tools and Techniques */}
            <div className="text-white font-mono flex flex-col items-center">
              <h3 className="font-bold">Tools and Techniques</h3>
              <ul className="w-full">
                {/* Docker */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/docker.png"
                      alt="Docker Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>Docker</span>
                </li>

                {/* NodeJS */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/jsIconGreen.svg"
                      alt="NodeJS Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>NodeJS</span>
                </li>

                {/* GitHub */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-400 rounded">
                    <Image
                      src="/images/logos/github.png"
                      alt="GitHub Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>GitHub</span>
                </li>

                {/* Agile */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-400 rounded">
                    <Image
                      src="/images/logos/agile.png"
                      alt="Agile Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>Agile</span>
                </li>
                {/* Linux */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-400 rounded">
                    <Image
                      src="/images/logos/linux-logo.png"
                      alt="Linux Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>Linux</span>
                </li>

                {/* Vagrant */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/vagrantup-icon.svg"
                      alt="Vagrant Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>Vagrant</span>
                </li>

                {/* MySQL */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/mysql.png"
                      alt="MySQL Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>MySQL</span>
                </li>

                {/* Troubleshooting - Assuming a generic icon; replace with specific if available */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/troubleshooting.png"
                      alt="Troubleshooting Icon"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>Troubleshooting</span>
                </li>

                {/* Windows */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/windows.png"
                      alt="Windows Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>Windows</span>
                </li>

                {/* Kubernetes */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/logo_with_border.svg"
                      alt="Kubernetes Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>Kubernetes</span>
                </li>
              </ul>
            </div>

            {/* Database & Networking */}
            <div className="text-white font-mono flex flex-col items-center">
              <h3 className="font-bold">DB & Networking</h3>
              <ul className="w-full">
                {/* PostgreSQL */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/postgresql.png"
                      alt="PostgreSQL Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>PostgreSQL</span>
                </li>

                {/* Networking */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-400 rounded">
                    <Image
                      src="/images/logos/networking.png"
                      alt="Networking Icon"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>Networking</span>
                </li>

                {/* UML */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/uml.png"
                      alt="UML Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>UML</span>
                </li>
              </ul>
            </div>

            {/* Development & Testing Tools */}
            <div className="text-white font-mono flex flex-col items-center">
              <h3 className="font-bold">Dev & Testing Tools</h3>
              <ul className="w-full">
                {/* Trello */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8 ">
                    <Image
                      src="/images/logos/trello.png"
                      alt="Trello Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>Trello</span>
                </li>

                {/* JMeter */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-400 rounded">
                    <Image
                      src="/images/logos/jmeter_square.svg"
                      alt="JMeter Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>JMeter</span>
                </li>

                {/* XAMPP */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/xampp.png"
                      alt="XAMPP Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>XAMPP</span>
                </li>

                {/* Metasploitable */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/metasploitable.png"
                      alt="Metasploitable Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>Metasploitable</span>
                </li>

                {/* NUnit */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/nunit.png"
                      alt="NUnit Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>NUnit</span>
                </li>

                {/* AdobeXD */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/xd.png"
                      alt="AdobeXD Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>AdobeXD</span>
                </li>

                {/* MacOS */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/MacOS_logo_(2017).svg"
                      alt="MacOS Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>MacOS</span>
                </li>

                {/* Selenium */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/Selenium_Logo.png"
                      alt="Selenium Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>Selenium</span>
                </li>

                {/* Security Testing - Assuming a generic icon; replace if specific logo is available */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-400 rounded">
                    <Image
                      src="/images/logos/securitytesting.png"
                      alt="Security Testing Icon"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>Security Testing</span>
                </li>

                {/* ZAP */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/ZAP.png"
                      alt="ZAP Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>ZAP</span>
                </li>
              </ul>
            </div>

            {/* Others */}
            <div className="text-white font-mono flex flex-col items-center">
              <h3 className="font-bold">Others</h3>
              <ul className="w-full">
                {/* TypeScript */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/typescript.png"
                      alt="TypeScript Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>TypeScript</span>
                </li>

                {/* Microsoft Excel */}
                <li className="flex items-center space-x-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/images/logos/excel.png"
                      alt="Microsoft Excel Logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span>Microsoft Excel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div
          id="experience"
          className="section mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0"
        >
          <h2 className="text-2xl font-semibold mb-3">Projects Worked On</h2>

          {/* Project: ChatGBC */}
          <div className="mb-6 text-left">
            <h3 className="text-xl font-semibold">
              ChatGBC – Blockhack Hackathon | 2023
            </h3>
            <p className="text-sm font-semibold">
              Technologies Used -
              <span className="text-sm opacity-75">
                {" "}
                React, Solidity, GPT API, NodeJS, JavaScript, Docker
              </span>
            </p>
            <p className="text-sm font-semibold">
              Project Details -
              <span className="text-sm opacity-50">
                {" "}
                Developed a NodeJS application that utilizes React on the
                frontend and GPT API to analyze Solidity code, presenting the
                analysis in an understandable format. Check out the{" "}
                <a
                  href="https://github.com/apatel2582/Blockhack_HyperCycleAI_Decentralized_Minds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  GitHub repository
                </a>{" "}
                for more details.
              </span>
            </p>
            <a
              href="https://github.com/apatel2582/Blockhack_HyperCycleAI_Decentralized_Minds"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
            >
              View on GitHub
            </a>
          </div>

          {/* Project: Food Street Management System */}
          <div className="mb-6 text-left">
            <h3 className="text-xl font-semibold">
              Food Street Management System | 2023
            </h3>
            <p className="text-sm font-semibold ">
              Frontend - <span className="text-sm opacity-75">WPF & C#</span>
            </p>
            <p className="text-sm font-semibold">
              Backend - <span className="text-sm opacity-75">MySQL</span>
            </p>
            <p className="text-sm font-semibold">
              Project Details -{" "}
              <span className="text-sm opacity-50">
                Developed a Windows application using WPF & C# for frontend and
                MySQL for backend, employing OOP principles and Agile
                methodology. Explore the{" "}
                <a
                  href="https://github.com/apatel2582/FoodStreetManagementSystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  GitHub repository
                </a>{" "}
                for more details.
              </span>
            </p>
            <a
              href="https://github.com/apatel2582/FoodStreetManagementSystem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
            >
              View on GitHub
            </a>
          </div>

          {/* Project: Truck Repo */}
          <div className="mb-6 text-left">
            <h3 className="text-xl font-semibold">Truck Repo | 2023</h3>
            <p className="text-sm font-semibold">
              Frontend -{" "}
              <span className="text-sm opacity-75">NodeJS with Express</span>
            </p>
            <p className="text-sm font-semibold">
              Backend - <span className="text-sm opacity-75">PostgreSQL</span>
            </p>
            <p className="text-sm font-semibold">
              Project Details -{" "}
              <span className="text-sm opacity-50">
                Utilized NodeJS with Express for the frontend and PostgreSQL for
                backend, focusing on creating secure and scalable applications.
                Explore the{" "}
                <a
                  href="https://github.com/apatel2582/SENG8070_Sec_01_Group_08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  GitHub repository
                </a>{" "}
                for more details.
              </span>
            </p>
            <a
              href="https://github.com/apatel2582/SENG8070_Sec_01_Group_08"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
            >
              View on GitHub
            </a>
          </div>

          {/* Project: Non-Functional Testing */}
          <div className="mb-6 text-left">
            <h3 className="text-xl font-semibold">
              Non-Functional Testing | 2023
            </h3>
            <p className="text-sm font-semibold">
              Software -{" "}
              <span className="text-sm opacity-75">
                Vagrant, JMeter, Python Scripts, Linux (Fedora, Ubuntu)
              </span>
            </p>
            <p className="text-sm font-semibold">
              Project Details -{" "}
              <span className="text-sm opacity-50">
                Engaged in performance, reliability, and scalability testing
                using Vagrant, JMeter, and custom Python scripts within Linux
                environments.
              </span>
            </p>
          </div>

          {/* Volunteer Experience */}
          <div className="mb-6 text-left">
            <h3 className="text-xl font-semibold">
              Volunteer at George Brown College | Winter 2024
            </h3>
            <p className="text-sm font-semibold">
              Role -{" "}
              <span className="text-sm opacity-50">
                Assisted in Campus Days and New Students Orientation, helping
                students with inquiries and guiding them around the campus.
              </span>
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div
          id="education"
          className="section mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0"
        >
          <h2 className="text-2xl font-semibold mb-3">Education</h2>

          {/* Blockchain Development */}
          <div className="mb-6 text-left">
            <h3 className="text-xl font-semibold">
              Blockchain Development | George Brown College, ON | Expected 2024
            </h3>
            <p className="text-sm opacity-50">
              PG-Certificate in Blockchain Development, focusing on the
              integration of blockchain technology in digital solutions.
            </p>
          </div>

          {/* Software Quality Assurance and Test Engineering */}
          <div className="mb-6 text-left">
            <h3 className="text-xl font-semibold">
              Software Quality Assurance and Test Engineering | Conestoga
              College | 2023
            </h3>
            <p className="text-sm opacity-50">
              Graduate Certificate in Software Quality Assurance and Test
              Engineering, emphasizing software testing methodologies and
              quality control processes.
            </p>
          </div>

          {/* Computer Science at Sangai International University */}
          <div className="mb-6 text-left">
            <h3 className="text-xl font-semibold">
              Computer Science | Sangai International University, India | 2018 –
              2021
            </h3>
            <p className="text-sm opacity-50">
              Bachelor&apos;s degree in Computer Science, covering a range of
              topics from programming languages to system architecture.
            </p>
          </div>

          {/* Computer Science at UT Arlington (Dropped) */}
          <div className="mb-6 text-left">
            <h3 className="text-xl font-semibold">
              Computer Science (Dropped) | UT Arlington, Dallas, USA | 2015 -
              2018
            </h3>
            <p className="text-sm opacity-50">
              Pursued a Bachelor&apos;s degree in Computer Science, focusing on
              foundational aspects of computing and software development.
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="lg:fixed bottom-0 left-0 flex w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:h-48 h-auto lg:items-end items-center lg:justify-center justify-around lg:p-8 p-2 flex-col lg:flex-row">
          {/* LinkedIn */}
          <a
            className="flex items-center gap-2 p-2 lg:p-0 mr-4"
            href="https://www.linkedin.com/in/anishkumar-patel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/logos/LI-In-Bug.png"
              alt="LinkedIn Logo"
              width={30}
              height={30}
            />
            <span className="hidden lg:inline">LinkedIn</span>
          </a>

          {/* YouTube */}
          <a
            className="flex items-center gap-2 p-2 lg:p-0 mr-4"
            href="https://www.youtube.com/@CharGovinda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/logos/yt_icon_rgb.png"
              alt="YouTube Logo"
              width={30}
              height={30}
            />
            <span className="hidden lg:inline">YouTube</span>
          </a>

          {/* Twitter/X */}
          <a
            className="flex items-center gap-2 p-2 lg:p-0 mr-4"
            href="https://twitter.com/CharGovinda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/logos/x-logo.svg"
              alt="Twitter Logo"
              width={30}
              height={30}
            />
            <span className="hidden lg:inline">Twitter/X</span>
          </a>

          {/* Telegram */}
          <a
            className="flex items-center gap-2 p-2 lg:p-0 mr-4"
            href="https://t.me/chargaoshou"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/logos/Telegram-Logo.png"
              alt="Telegram Logo"
              width={30}
              height={30}
            />
            <span className="hidden lg:inline">Telegram</span>
          </a>

          {/* WhatsApp */}
          <a
            className="flex items-center gap-2 p-2 lg:p-0 mr-4"
            href="https://wa.me/16474823847"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/logos/WhatsApp-Logo.png"
              alt="WhatsApp Logo"
              width={30}
              height={30}
            />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>
        </div>
      </main>
    </>
  );
};

export default Home;
