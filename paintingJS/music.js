function jsListen() {
    var x = document.createElement("AUDIO");
  
    if (x.canPlayType("audio/mpeg")) {
      x.setAttribute("src","musics/2.mp3");
    } else {
      x.setAttribute("src","musics/2.ogg");
    }
  
    x.setAttribute("controls", "controls");
    document.body.appendChild(x);
  }

  /*music을 클릭하면 여러개의 플레이어가 나온다 어떻게 하나만 나오게 하는지 모르겠다
music을 누르면 나왔다가 들어갔다가 하는 형식으로 만들고 싶다.그리고 music을 누르는 동시에 플레이어가 열리면서 자동재생되면 좋갰다 모르겠다. autoplay쓰니까 뻑난다.나도뻑난다
그리고 노래 여러 개 넣고 랜덤 재생하고 싶다 모르겠다 코딩 너무 어렵다 내가 아는건 뭔가...슾프다...*/