function sendData (sData) {
    location.search = sData;
    switch (sData) {
        case 'debit' :
            document.getElementsByClassName('operation credit').className ="creditOff";
        case 'credit' :
            document.getElementsByClassName('operation credit').className ="debitOff";
        default :
        return;
    }
  }
  