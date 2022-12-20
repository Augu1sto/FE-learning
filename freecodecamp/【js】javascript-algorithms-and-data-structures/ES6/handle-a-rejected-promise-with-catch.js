const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer 设置为 false，表示从服务器获得无效响应
  let responseFromServer = false;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});