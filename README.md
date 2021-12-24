# haki-dictionary-api

http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/announcement: get all announcement  
http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/announcement/createAnnouncement: create announcement  
http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/announcement/deleteAnnouncement/:id: delete announcement by id  

http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/user: get all user  
http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/user/createUser: create user  

  
http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/dictEngVie: get all dict Eng Vie  
http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/dictEngVie/:name: get dict Eng Vie by name  
http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/dictEngVie/id/:id: get dict Eng Vie by id  

http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/dictVieEng: get all dict Vie Eng  
http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/dictVieEng/:name: get dict Vie Eng by name  
http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/dictVieEng/id/:id: get dict Vie Eng by id  

http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/historyEngVie/addHistoryEngVie: Add word to history Eng Vie  
http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/historyEngVie/:id: get all history word Eng Vie by user id  

http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/historyVieEng/addHistoryVieEng: Add word to history Vie Eng  
http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/historyVieEng/:id: get all history word Vie Eng by user id   

http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/yourWordEngVie/addYourWordEngVie: Thêm từ của bạn Anh Việt (Truyền idUser và idDicEV)  
http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/yourWordEngVie/:id: Lấy tất cả từ của bạn Anh Việt theo user id  

http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/yourWordVieEng/addYourWordVieEng: Thêm từ của bạn Việt Anh (Truyền idUser và idDicVE)  
http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/yourWordVieEng/:id: Lấy tất cả từ của bạn Việt Anh theo user id  

http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/statistic/countYourWord/:id: Đếm từ của bạn theo user id  
http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/statistic/countHistoryWord/:id: Đếm từ đã tra theo user id  
  
http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/yourWordEngVie/deleteYourWordEngVie: Xóa từ của bạn Anh Việt (Truyền idUser và idDicEV)  
http://ec2-3-144-36-186.us-east-2.compute.amazonaws.com:3030/api/yourWordVieEng/deleteYourWordVieEng: Xóa từ của bạn Việt Anh (Truyền idUser và idDicVE)  
