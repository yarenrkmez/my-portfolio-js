import React, { useState } from "react";

const Resume = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div id="resume" className="outerDivResume">
      <div className="resumeContent">
        <div>about</div>
        <div className="resumeInnerDiv">
          <div className="resumeLeftbar">
            <div>
              <span
                onClick={() => {
                  setSelected(0);
                }}
              >
                Eğitim
              </span>
              <span
                onClick={() => {
                  setSelected(1);
                }}
              >
                iş Geçmişi
              </span>
              <span
                onClick={() => {
                  setSelected(2);
                }}
              >
                Programlama yetenekleri
              </span>
              <span
                onClick={() => {
                  setSelected(3);
                }}
              >
                Projeler
              </span>
              <span
                onClick={() => {
                  setSelected(4);
                }}
              >
                İlgi Alanları
              </span>
            </div>
          </div>
          {/* <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vitae nisi et augue pulvinar ullamcorper sit amet in sapien. Sed
            eget ullamcorper nibh. Vestibulum ut scelerisque nibh, vitae
            molestie ante. Nulla sed rutrum augue, id convallis est. Integer
            ullamcorper, dolor ac egestas scelerisque, elit nisi aliquet augue,
            at iaculis dolor elit sed mauris. Donec et sem nec diam tincidunt
            convallis id in nibh. Nulla at elit elit. Morbi ac purus congue,
            suscipit enim ac, tempor diam. Nam pharetra mollis sem eget
            pharetra. Mauris vulputate, leo at tincidunt facilisis, tellus
            ligula convallis urna, eget aliquet ante mi quis nunc. Aliquam a
            erat arcu. Nunc tincidunt lacus vitae nunc mattis placerat.
          </div> */}
          <div>{selected===0 && <Education />} </div>
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
