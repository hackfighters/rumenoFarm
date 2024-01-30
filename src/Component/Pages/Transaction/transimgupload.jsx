// import React, { useState, useRef } from "react";
// // import "../../../assets/test.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faImage } from "@fortawesome/free-solid-svg-icons";

// const TransImgUpload = () => {
// //   const [isDropZoneOver, setIsDropZoneOver] = useState(false);
//   const [loadingTextVisible, setLoadingTextVisible] = useState(false);
//   const [previewImageVisible, setPreviewImageVisible] = useState(false);
//   const [uploadAreaOpen, setUploadAreaOpen] = useState(false);
//   const [fileDetailsOpen, setFileDetailsOpen] = useState(false);
//   const [uploadedFileOpen, setUploadedFileOpen] = useState(false);
//   const [uploadedFileInfoActive, setUploadedFileInfoActive] = useState(false);
//   const [uploadedFileName, setUploadedFileName] = useState("");
//   const [uploadedFileType, setUploadedFileType] = useState("");
//   const [uploadedFileCounter, setUploadedFileCounter] = useState(0);
//   const [image, setImage] = useState(null)

//   console.log(image,'nknjbkjbwkjdbljbd')

//   const dropZoneRef = useRef(null);
//   const fileInputRef = useRef(null);
//   const previewImageRef = useRef(null);

//   const imagesTypes = ["jpeg", "png", "svg", "gif"];

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     // setIsDropZoneOver(true);
//   };

//   const handleDragLeave = () => {
//     // setIsDropZoneOver(false);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     // setIsDropZoneOver(false);

//     const file = event.dataTransfer.files[0];
//     uploadFile(file);
//     console.log(uploadFile)
//   };

//   const handleClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     uploadFile(file);
//     setImage(file)
//     console.log(file,'fasknlasnl')
//   };

//   const uploadFile = (file) => {
//     const fileType = file.type;
//     const fileSize = file.size;

//     if (fileValidate(fileType, fileSize)) {
//       dropZoneRef.current.classList.add("drop-zoon--Uploaded");
//       setLoadingTextVisible(true);
//       setPreviewImageVisible(false);
//       setUploadedFileOpen(false);
//       setUploadedFileInfoActive(false);

//       const fileReader = new FileReader();

//       fileReader.onload = function () {
//         setTimeout(() => {
//           setUploadAreaOpen(true);
//           setLoadingTextVisible(false);
//           setPreviewImageVisible(true);
//           setFileDetailsOpen(true);
//           setUploadedFileOpen(true);
//           setUploadedFileInfoActive(true);
//         }, 500);
//         console.log("Uploaded Image:", fileReader.result);

//         const UploadedImage = fileReader.result
//         console.log(UploadedImage)

//         previewImageRef.current.setAttribute("src", fileReader.result);
//         setUploadedFileName(file.name);

//         const fileTypeForState = imagesTypes.includes(fileType)
//           ? fileType
//           : "image";
//         setUploadedFileType(fileTypeForState);
//         progressMove();
//       };

//       fileReader.readAsDataURL(file);
//     }
//   };

//   const progressMove = () => {
//     let counter = 0;

//     setTimeout(() => {
//       const counterIncrease = setInterval(() => {
//         if (counter === 100) {
//           clearInterval(counterIncrease);
//         } else {
//           counter += 10;
//           setUploadedFileCounter(counter);
//         }
//       }, 100);
//     }, 600);
//   };

//   const fileValidate = (fileType, fileSize) => {
//     const isImage = imagesTypes.filter(
//       (type) => fileType.indexOf(`image/${type}`) !== -1
//     );

//     if (isImage.length !== 0) {
//       if (fileSize <= 2000000) {
//         return true;
//       } else {
//         alert("Please Your File Should be 2 Megabytes or Less");
//         return false;
//       }
//     } else {
//       alert("Please make sure to upload An Image File Type");
//       return false;
//     }
//   };

//   return (
//     <div
//       id="uploadArea"
//       className={`upload-area ${uploadAreaOpen ? "upload-area--open" : ""}`}
//     >
//       <h6 className="my-3 text-secondary">Upload Transaction Screenshot</h6>
//       <div
//         className="upload-area__drop-zoon drop-zoon"
//         ref={dropZoneRef}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={handleDrop}
//         onClick={handleClick}
//       >
//         <span className="drop-zoon__icon">
//           <FontAwesomeIcon icon={faImage} />
//         </span>
//         <p className="drop-zoon__paragraph">
//           Drop your Payment screenshot here
//         </p>
//         <span
//           id="loadingText"
//           className="drop-zoon__loading-text"
//           style={{ display: loadingTextVisible ? "block" : "none" }}
//         >
//           Please Wait
//         </span>
//         <img
//           src=""
//           alt="loading"
//           id="previewImage"
//           className="drop-zoon__preview-image"
//           ref={previewImageRef}
//           style={{ display: previewImageVisible ? "block" : "none" }}
//           draggable="false"
//         />
//         <input
//           type="file"
//           id="fileInput"
//           className="drop-zoon__file-input"
//           accept="image/*"
//           onChange={handleFileChange}
//           ref={fileInputRef}
//         />
//       </div>

//       <div
//         id="fileDetails"
//         className={`upload-area__file-details file-details ${
//           fileDetailsOpen ? "file-details--open" : ""
//         }`}
//       >
//         <h5 className="my-3">Uploaded File</h5>

//         <div
//           id="uploadedFile"
//           className={`uploaded-file ${
//             uploadedFileOpen ? "uploaded-file--open" : ""
//           }`}
//         >
//           <div className="uploaded-file__icon-container">
//             <i className="bx bxs-file-blank uploaded-file__icon"></i>
//             <span className="uploaded-file__icon-text">{uploadedFileType}</span>
//           </div>

//           <div
//             id="uploadedFileInfo"
//             className={`uploaded-file__info ${
//               uploadedFileInfoActive ? "uploaded-file__info--active" : ""
//             }`}
//           >
//             <span className="uploaded-file__name">{uploadedFileName}</span>
//             <span className="uploaded-file__counter">{`${uploadedFileCounter}%`}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TransImgUpload;
