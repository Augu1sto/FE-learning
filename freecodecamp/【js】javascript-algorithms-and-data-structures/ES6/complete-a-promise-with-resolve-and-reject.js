const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer 表示从服务器获得一个响应
  let responseFromServer;

  if(responseFromServer) {
    // 修改这一行
    resolve("We got the data");
  } else {  
    // 修改这一行
    reject("Data not received");
  }
});