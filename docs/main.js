const btn_rock = document.getElementById("rock");
const btn_papper = document.getElementById("papper");
const btn_tig = document.getElementById("tig");
const btn_reset = document.getElementById("reset");

const arr = ['🗿', '📃', '✂️'];
let game = 0;
let p_score = 0;
let c_score = 0;

function n_games(){
    if (game < 3)
        return (true);
    else
        return (false);
}

function end_game(){
    $("#game").show();
    if (p_score > c_score){
        document.getElementById("game").innerHTML = "El jugador ha ganado!";    
    }else if( p_score < c_score){
        document.getElementById("game").innerHTML = "El computador ha ganado!";
    }else{
        document.getElementById("game").innerHTML = "EMPATEE!!";
    }
    $("#reset").show();
    $("#botones").hide();
}

function who_win(op_player, op_comp){
    console.log(op_player, op_comp);
    if (op_player == '🗿' && op_comp == '✂️')
        p_score++;
    else if (op_player == '📃' && op_comp == '🗿')
        p_score++;
    else if (op_player == '✂️' && op_comp == '📃')
        p_score++;
    
    if (op_comp == '🗿' && op_player == '✂️')
        c_score++;
    else if (op_comp == '📃' && op_player == '🗿')
        c_score++;
    else if (op_comp == '✂️' && op_player == '📃')
        c_score++;
}

function comp_game(op_player){
    $("#game").hide()
    $("#reset").hide();
    document.getElementById("counter").innerHTML = `<mark>partida: ${game}/3 </mark>`; 
    let ind = Math.floor(Math.random() * 3);
    var em = arr[ind];
    document.getElementById("show-comp").innerHTML =  'Computer:' + em;
    who_win(op_player, em);
}

function start_play(emoji) {
    if (n_games() == false)
        end_game();
    else{
        game++;
        document.getElementById("show").innerHTML =  `Player: ${emoji}` ;
        comp_game(emoji);
        if (game == 3)
            end_game();
    }
}


btn_rock.onclick = function(){
   start_play('🗿')
}

btn_papper.onclick = function(){
   start_play('📃')
}

btn_tig.onclick = function(){
   start_play('✂️'); 
}

btn_reset.onclick = function(){
    game = 0;
    $("#game").hide();
    $("#reset").hide();
    document.getElementById("counter").innerHTML = `<mark>partida: ${game}/3 </mark>`;
    $("#botones").show(); 
}

