import initWidget from "./index.js";

window.initWidget = initWidget;
#waifu {
   bottom: -1000px;
   left: 0;
   line-height: 0;
   margin-bottom: 10px;
   position: fixed;
   transform: translateY(3px);
   transition: transform .3s ease-in-out, bottom 3s ease-in-out;
   z-index: 1;
}
#live2d {
   cursor: grab;
   height: 200px;
   position: relative;
   width: 200px;
}
#waifu-tool {
	color: #aaa;
	opacity: 0;
	position: absolute;
	right: 10px;
	top: 20px;
	transition: opacity 1s;
}
#waifu-tool span {
   display: block;
   height: 25px;
   text-align: center;
}
#waifu-tool svg {
   fill: #7b8c9d;
   cursor: pointer;
   height: 20px;
   transition: fill .3s;
}
