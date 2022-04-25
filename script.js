        var r = document.getElementById("r");
		var p = document.getElementById("p");
		var s = document.getElementById("s");

		  r.addEventListener("click", rock_function);
		  p.addEventListener("click", paper_function);
		  s.addEventListener("click", scissors_function);

		var win_count = 0;
		var tie_count = 0;
		var loss_count = 0;

		  function rock_function()
		{
			game_turn(0);
			update_game_counts();
		}

		  function paper_function()
		{
			game_turn(1);
			update_game_counts();
		}

		  function scissors_function()
		{
			game_turn(2);
			update_game_counts();
		}

		  function game_turn(user_choice)
		{
			comp_choice = Math.floor(Math.random() * 3);
			choices = ["Rock", "Paper", "Scissors"];

			var result_string = "Computer chose " + choices[comp_choice] + ".  ";

			if((parseInt(comp_choice) + 1) % 3 === parseInt(user_choice))
		{
				win_count = parseInt(win_count) + 1;
				result_string = result_string + "You won!";
			}
			else if(comp_choice === user_choice)
		{
				tie_count = parseInt(tie_count) + 1;
				result_string = result_string + "It's a draw.";
			}
			else if(parseInt(comp_choice) === (parseInt(user_choice) + 1) % 3)
		{
				loss_count = parseInt(loss_count) + 1;
				result_string = result_string + "You lost.";
			}

			var result_p = document.getElementById("result");
			var result_node = document.createTextNode(result_string);

			result_p.replaceChild(result_node, result_p.firstChild);
		}

		function update_game_counts()
		{
			var win = document.getElementById("win");
			var tie = document.getElementById("tie");
			var loss = document.getElementById("loss");

			var w_string = "Wins:  " + win_count;
			var t_string = "Ties:  " + tie_count;
			var l_string = "Losses:  " + loss_count;

			var w_node = document.createTextNode(w_string);
			var t_node = document.createTextNode(t_string);
			var s_node = document.createTextNode(l_string);

			win.replaceChild(w_node, win.firstChild);
			tie.replaceChild(t_node, tie.firstChild);
			loss.replaceChild(s_node, loss.firstChild);
		}