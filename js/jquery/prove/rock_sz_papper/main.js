const btn_rock = document.getElementById("rock");
const btn_papper = document.getElementById("papper");
const btn_tig = document.getElementById("tig");

const arr = ['🗿', '📃', '✂️'];
let game = 1;
let p_score = 0;
let c_score = 0;

function n_games(){
    if (game <= 3)
        game++;
    else
        return (-1)
}

function end_game(){
    alert("El juego ha terminado");
}

function who_win(op_player, op_comp){
    console.log(op_player, op_comp);
    if (op_player == '🗿' && op_comp == '✂️')
        p_score++;
    else if (op_player == '📃' && op_comp == '🗿')
        p_score++;
    else if (op_player == '✂️' && op_comp == '📃')
        p_score++;
    

}

function comp_game(op_player){
    let ind = Math.floor(Math.random() * 3);
    var em = arr[ind];
    document.getElementById("show-comp").innerHTML =  'Computer:' + em;
    who_win(op_player, em);
}

btn_rock.onclick = function(){
    if (n_games() == -1)
        end_game();
    else{
        document.getElementById("show").innerHTML =  'Player: 🗿' ;
        comp_game('🗿');
    }
}

btn_papper.onclick = function(){
    if (n_games() == -1)
        end_game();
    else{
        document.getElementById("show").innerHTML =  'Player: 📃' ;
        comp_game('📃');
    }
}

btn_tig.onclick = function(){
    if (n_games() == -1)
        end_game();
    else{
        document.getElementById("show").innerHTML =  'Player: ✂️' ;
        comp_game('✂️');
    }
}



