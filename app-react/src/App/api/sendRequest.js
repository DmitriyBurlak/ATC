const sendRequest = function(method, url, body = null) {
    return fetch(url).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((error) => {
        const e = new Error("Ошибка");
        e.data = error;
        throw e;
      });
    });
  };
  
export default sendRequest
  