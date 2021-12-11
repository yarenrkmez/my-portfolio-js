import React, { useState } from "react";

const Resume = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div id="resume" className="outerDivResume">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="resumeContent">
        <div></div>
        <div className="resumeInnerDiv">
          <div className="resumeLeftbar">
            <div>
              <i
                className={`fa fa-graduation-cap ${
                  selected === 0 && "resumeSelected"
                }`}
                onClick={() => {
                  setSelected(0);
                }}
              >
                <span>Eğitim</span>
              </i>
              <i
                className={`fa fa-history ${
                  selected === 1 && "resumeSelected"
                }`}
                onClick={() => {
                  setSelected(1);
                }}
              >
                <span
                  onClick={() => {
                    setSelected(1);
                  }}
                >
                  iş Geçmişi
                </span>
              </i>
              <i className="fa fa-sticky-note">
                <span
                  onClick={() => {
                    setSelected(2);
                  }}
                >
                  Programlama yetenekleri
                </span>
              </i>
              <span
                onClick={() => {
                  setSelected(3);
                }}
              >
                Projeler
              </span>

            </div>
          </div>

          {selected === 0 && (
            <div>
              <Education />
            </div>
          )}

          {selected === 1 && (
            <div>
              <Education />
            </div>
          )}

          {selected === 2 && (
            <div>
              <Education />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae
      nisi et augue pulvinar ullamcorper sit amet in sapien. Sed eget
      ullamcorper nibh. Vestibulum ut scelerisque nibh, vitae molestie ante.
      Nulla sed rutrum augue, id convallis est. Integer ullamcorper, dolor ac
      egestas scelerisque, elit nisi aliquet augue, at iaculis dolor elit sed
      mauris. Donec et sem nec diam tincidunt convallis id in nibh. Nulla at
      elit elit. Morbi ac purus congue, suscipit enim ac, tempor diam. Nam
      pharetra mollis sem eget pharetra. Mauris vulputate, leo at tincidunt
      facilisis, tellus ligula convallis urna, eget aliquet ante mi quis nunc.
      Aliquam a erat arcu. Nunc tincidunt lacus vitae nunc mattis placerat.
    </div>
  );
};

export default Resume;
