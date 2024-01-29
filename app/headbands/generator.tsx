import React from "react";
import HtmlEmbed from "./embed";

const Generator: React.FC = () => {
  const exampleHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://unpkg.com/konva@9.3.1/konva.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GME Avatar</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            font-family: Impact, sans-serif;
        }
        #container-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        #canvas-container {
            position: relative;
            background-color: transparent;
        }
        #uploadButton, #saveButton {
            letter-spacing: 2px;
            font-family: Impact, sans-serif;
            margin: 10px;
            cursor: pointer;
            color: #ffff;
            background-color: #FE0000;
            font-size: 18px;
            border: 3px solid #fff;
            padding: 8px;
            border-radius: 0;
            transition: background-color 0.3s ease-in-out;
        }
        #uploadButton:hover, #saveButton:hover {
            background-color: #FF4040;
            color: white;
        }
        #saveButton {
            display: none;
        }
    </style>
</head>
<body>
    <div id="container-wrapper">
        <div id="canvas-container">
            <div id="canvas-border"></div>
        </div>
        <button id="uploadButton">Upload Profile Picture</button>
        <button id="saveButton">Save Image</button>
    </div>
    <script>
        const fixedCanvasWidth = 450;
        const maxCanvasHeight = 450;

        const stage = new Konva.Stage({
            container: 'canvas-container',
            width: fixedCanvasWidth,
            height: maxCanvasHeight,
        });

        const layer = new Konva.Layer();
        stage.add(layer);

        let mustache;
        let canvasBorder;
        let tr;


        const addMustacheToCanvas = () => {
            const mustacheImageSrc =
                'https://static.wixstatic.com/media/07832f_fa09c6a6da334c28a25ccc2ede4ad79e~mv2.png';

            canvasBorder = new Konva.Rect({
                width: stage.width(),
                height: stage.height(),
                stroke: 'white',
                strokeWidth: 5,
            });

            Konva.Image.fromURL(mustacheImageSrc, (img) => {
                mustache = img;
                const aspectRatio = img.width() / img.height();

                let newMustacheWidth = 250;
                let newMustacheHeight = 250 / aspectRatio;

                
                if (newMustacheHeight > maxCanvasHeight) {
                    newMustacheHeight = maxCanvasHeight;
                    newMustacheWidth = maxCanvasHeight * aspectRatio;
                }

                mustache.setAttrs({
                    width: newMustacheWidth,
                    height: newMustacheHeight,
                    x: (stage.width() - newMustacheWidth) / 2, 
                    y: (stage.height() - newMustacheHeight) / 2,
                    name: 'mustache',
                    draggable: true,
                });

                tr = new Konva.Transformer({
                    nodes: [mustache],
                    enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
                    keepRatio: true,
                    boundBoxFunc: (oldBox, newBox) => {
                        if (Math.abs(newBox.width) < 10 || Math.abs(newBox.height) < 10) {
                            return oldBox;
                        }
                        return newBox;
                    },
                   
                    padding: 10,
                    rotateEnabled: false,
                });

               
                mustache.on('click', () => {
                    tr.visible(!tr.visible());
                    layer.batchDraw();
                });

                layer.add(canvasBorder);
                layer.add(mustache);
                layer.add(tr);
                tr.visible(false); 

                
                $('#saveButton').show();

                layer.batchDraw();
            });
        };

 
        const changeCanvasBackground = (imageSrc) => {
            const background = new Image();
            background.onload = function () {
                const aspectRatio = background.width / background.height;

                let newCanvasWidth = fixedCanvasWidth;
                let newCanvasHeight = fixedCanvasWidth / aspectRatio;

                if (newCanvasHeight > maxCanvasHeight) {
                    newCanvasHeight = maxCanvasHeight;
                    newCanvasWidth = maxCanvasHeight * aspectRatio;
                }

               
                stage.width(newCanvasWidth);
                stage.height(newCanvasHeight);

                
                canvasBorder.width(newCanvasWidth);
                canvasBorder.height(newCanvasHeight);

                const bg = new Konva.Image({
                    image: background,
                    width: newCanvasWidth,
                    height: newCanvasHeight,
                });

                layer.destroyChildren();
                layer.add(bg);
                addMustacheToCanvas();
                layer.batchDraw();
            };
            background.src = imageSrc;
        };

      
        const saveCanvasAsImage = () => {
        
            tr.visible(false);
            layer.batchDraw();

            const dataURL = stage.toDataURL({ mimeType: 'image/png', quality: 1 });
            const a = document.createElement('a');
            a.href = dataURL;
            a.download = 'canvas_with_mustache.png';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

    
            tr.visible(true);
            layer.batchDraw();
        };


        $('#uploadButton').click(function () {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';

            input.addEventListener('change', (event) => {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (event) {
                        const imageSrc = event.target.result;
                        changeCanvasBackground(imageSrc);
                    };
                    reader.readAsDataURL(file);
                }
            });

            input.click();
        });


        $('#saveButton').click(function () {
            saveCanvasAsImage();
        });

        addMustacheToCanvas();
    </script>
</body>
</html>
`;

  return (
    <div>
      <h1 className="text-white">Headbands Generator</h1>
      <HtmlEmbed htmlContent={exampleHtml} />
    </div>
  );
};

export default Generator;
