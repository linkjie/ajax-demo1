console.log("i am main.js");

getcss.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "1.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const style = document.createElement("style");
      style.innerHTML = request.response;
      document.head.appendChild(style);
    }
  };
  request.send();
};

getjs.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const script = document.createElement("script");
      script.innerHTML = request.response;
      document.body.appendChild(script);
    }
  };
  request.send();
};

gethtml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const div = document.createElement("div");
      div.innerHTML = request.response;
      document.body.appendChild(div);
    }
  };
  request.send();
};
getxml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const text = request.responseXML
        .getElementsByTagName("name")[0]
        .textContent.trim();
      user.innerHTML = text;
    }
  };
  request.send();
};
getjson.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const obj = JSON.parse(request.response);
      user.textContent = obj.name;
    }
  };
  request.send();
};
