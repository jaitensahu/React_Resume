import "./Certificate.css";

const Certificate = () => {
  let certificateData = [
    {
      title: "Node.Js Essentials",
      learning: "LinkedIn Learning",
      certificateImg:
        "https://oktayshakirov.com/assets/images/certificates/node.js-essentials.png",
    },
    {
      title: "React.Js Essentials",
      learning: "LinkedIn Learning",
      certificateImg:
        "https://oktayshakirov.com/assets/images/certificates/react.js-essentials.png",
    },
    {
      title: "JavaScript Essentials",
      learning: "LinkedIn Learning",
      certificateImg:
        "https://oktayshakirov.com/assets/images/certificates/javascript-essentials.png",
    },
    {
      title: "Fundamentals Of Digital Marketing",
      learning: "Google Certified Digital Marketing Course",
      certificateImg:
        "https://oktayshakirov.com/assets/images/certificates/fundamentals-of-digital-marketing.png",
    },
    {
      title: "Elements Of AI",
      learning: "University of Helsinki",
      certificateImg:
        "https://oktayshakirov.com/assets/images/certificates/elements-of-ai.png",
    },
    {
      title: "Efficient Email Management",
      learning: "WEKA Media GmbH & Co. KG",
      certificateImg:
        "https://oktayshakirov.com/assets/images/certificates/efficient-email-management.png",
    },
    {
      title: "Time And Self Management",
      learning: "VIWIS GmbH",
      certificateImg:
        "https://oktayshakirov.com/assets/images/certificates/time-and-self-management.png",
    },
    {
      title: "Excel 2013 Professional",
      learning: "Microsoft",
      certificateImg:
        "https://oktayshakirov.com/assets/images/certificates/excel-2013-professional.png",
    },
    {
      title: "Word 2013 Professional",
      learning: "Microsoft",
      certificateImg:
        "https://oktayshakirov.com/assets/images/certificates/word-2013-professional.png",
    },
    {
      title: "Intercultural Competence",
      learning: "IMAP GmbH",
      certificateImg:
        "https://oktayshakirov.com/assets/images/certificates/intercultural-competence.png",
    },
    {
      title: "Communication And Complaint Management",
      learning: "Hiba impulse GmbH",
      certificateImg:
        "https://oktayshakirov.com/assets/images/certificates/communication-complaint-management.png",
    },
    {
      title: "German Language C1",
      learning: "TELC European Language Certificates",
      certificateImg:
        "https://oktayshakirov.com/assets/images/certificates/german-c1.png",
    },
    {
      title: "English Language B2",
      learning: "LinguaTV GmbH",
      certificateImg:
        "https://oktayshakirov.com/assets/images/certificates/english-b2.png",
    },
  ];

  return (
    <div className="certificateContainer">
      <h1>My Certificates</h1>
      
      <div className="underline"></div>
      
      <div className="certificates">
      <i class="fa-solid fa-desktop"></i>
        
        <h2>Technical Competence</h2>
        <div className="technical">
          {certificateData.map((certificate, idx) => {
            if(idx<5)
            return <div>
            <li>{certificate.title}</li>
            <p>{certificate.learning}</p>
            <div className="certificateImg">
              <img
                src={certificate.certificateImg}
                alt=""
              />
            </div>
          </div>
          })}
        </div>
        <div className="professional">
          <h2>Professional Skills</h2>
          <div className="professionalCertificates technical">
          {certificateData.map((certificate, idx) => {
            if(idx>5 && idx<11)
            return <div>
            <li>{certificate.title}</li>
            <p>{certificate.learning}</p>
            <div className="certificateImg">
              <img
                src={certificate.certificateImg}
                alt=""
              />
            </div>
          </div>
          })}
          </div>
        </div>
        <div className="languageProf">
          <h2>Language Proficiency</h2>
          <div className="languageCertificates technical">
          {certificateData.map((certificate, idx) => {
            if(idx>10)
            return <div>
            <li>{certificate.title}</li>
            <p>{certificate.learning}</p>
            <div className="certificateImg">
              <img
                src={certificate.certificateImg}
                alt=""
              />
            </div>
          </div>
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
