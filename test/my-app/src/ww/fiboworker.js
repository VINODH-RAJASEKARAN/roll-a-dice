export default () => {
    // eslint-disable-next-line no-restricted-globals
    self.onmessage = (message) => {
      console.log("Worker Started")
      const nbr = message.data;
      console.log("input data " + nbr)
      var n1 = 0;
      var n2 = 1;
      var somme = 0;
      for (let i = 2; i <= nbr; i++) {
        somme = n1 + n2;
        n1 = n2;
        n2 = somme;
      }
      const result = nbr ? n2 : n1;
      console.log("result " + result)
      postMessage(20);
    };
  };