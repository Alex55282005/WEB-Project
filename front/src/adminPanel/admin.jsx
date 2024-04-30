import { useState, useEffect } from "react";
import axios from "axios";


function PostLogos() {
    function convertImage() {
        let text = document.getElementById("text");
        let inputElement = document.getElementById("imageInput");
        let imgElement = document.getElementById("convertedImg");


        console.log(text.value);

        let selectedFile = inputElement.files[0];
        let reader = new FileReader();

        reader.onload = function (e) {
          let imageData = e.target.result;
          let convertedData = convertToBase64(imageData);

          let logo = {
            name:text.value,
            code:convertedData
          };
          // Вместо вывода в консоль можно отправить данные на сервер для сохранения в базу данных
          setData(logo);
          console.log("Converted Image Data:", convertedData);

          // Отображаем изображение в теге img
          imgElement.src = "data:image/jpeg;base64," + convertedData;
        };

        reader.readAsDataURL(selectedFile);
      }

      function convertToBase64(imageData) {
        // Удаляем заголовок данных
        let base64Data = imageData.replace(
          /^data:image\/(png|jpg|jpeg);base64,/,
          ""
        );
        return base64Data;
      }
      function setData(data) {
        let arr = [];
        arr.push(data);
        axios.post("https://658d81257c48dce947394ee1.mockapi.io/logos/", arr[0]).then((resp)=>{
            console.log(resp.data);
        })
      }


    return(
        <div>
            <input type="text" id="text" />
            <input type="file" id="imageInput" accept="image/*" />
            <button onClick={convertImage}>Convert and Save</button>
            <br />
            <img id="convertedImg" alt="Converted Image" />
        </div>
    );
}

export default PostLogos;