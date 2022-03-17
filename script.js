window.onload = function (){


    var  campo = document.getElementById('Campo');
    var contexto = campo.getContext("2d");

//// aqui e para a movimentacao da cobra 

   document.addEventListener("keydown" , function(event) {
    if(event.key == 'ArrowUp'){
        vx= 0;
        vy =-vel
       }
       else if (event.key == 'ArrowRight'){
        vx = vel;
        vy = 0 
       }
       else if (event.key == 'ArrowDown'){
        vx = 0;
        vy = vel
       }
       else if (event.key == 'ArrowLeft'){
        vx = -vel;
        vy = 0
       }
     })

    setInterval(game , 60); /// setando o setInterval para chamar a funcao game , que sera chamad a cada 60 ms

   const vel  =1 ; //////let velocidade  = 1 ; 
    let vx = vy  = 0;///let velocidadeX = 0
    ///let velocidadeY = 0 ;
    let px = 10;  ///let pontoX = 10;
    let py = 15; ///let pontoY = 15 ;
    let tp = 20; ///let tamanhoQuadrado = 10 ;
    let qp = 20;///let quantidadeQuadrado = 20 ;
    let ax = ay = 15; ///let macaX =0
    ///let  macaY = 0 ;

   let trail =[]; ///let rastro = [];
    tail = 5 ;


    function game(){
        px += vx; // atualiza a posicao da cabeca da cobra 
        py += vy; // atualizza a posicao da cabeca da cobra 

        if(px < 0 ){
            px = qp -1  /// nesse ponto e para se a cobra chegar o limite da tela na direita 
        }
        if(px >qp-1){
            px = 0
        }
        if(py < 0 ){
            py = qp -1 
        }
        if(py > qp -1){
            py = 0;
        }

         /// mudando a cor do campo 
        contexto.fillStyle = 'black';
        contexto.fillRect(0,0, campo.width , campo.height);

        // fazendo a maca , como a cor dela e o tamanho 
        contexto.fillStyle = 'red'
        contexto.fillRect(ax * tp , ay * tp , tp , tp)

        // fazendo as mudanca e colocando cor na cobra 

        contexto.fillStyle = 'gray'
        for( let i = 0 ; i <trail.length ; i ++){ // esse for verifica se ouve colisao a cobra 
            contexto.fillRect(trail[i].x*tp , trail[i].y*tp,  tp , tp)
        // aqui havera a verificacao da colizao
        if(trail[i].x == px &&   trail[i].y == py){
            vx = vy = 0
            }
         }
         //// vamos agor afazer o movimento da cobra 

         trail.push({ x : px , y :py})
         while(trail.length > tail ) {
             trail.shift()
         }
         if(ax == px && ay ==py) {
            tail++
            ax =Math.floor(Math.random() * qp)
            ay =Math.floor(Math.random() * qp)
        } 
    }
    

}