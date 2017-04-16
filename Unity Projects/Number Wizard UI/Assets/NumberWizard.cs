using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class NumberWizard : MonoBehaviour {
	// Use this for initialization
	int max;
	int min;
	int guess;
    public int maxGuessesAllowed = 10;

    // we have a "text" variable of type "Text" and "text" is the name
    public Text text;

    public Text guessText;
	
	void Start () {
		StartGame();
	}
	
	void StartGame () {
		max = 1000;
		min = 1;
		guess = 212;
	    NextGuess();
		
		/*max = max + 1;*/
		
		print ("========================");
		print ("Welcome to Number Wizard");
		print ("Pick a number in your head, but don't tell me!");
		
		print ("The highest number you can pick is " + max);
		print ("The lowest number you can pick it " + min);
		
		print ("Is the number higher or lower than " + guess);
		print ("Up = higher, down = lower, return = equal");
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown(KeyCode.UpArrow)) {
// 			min = guess;
// 			NextGuess();
            GuessHigher();
		} else if (Input.GetKeyDown(KeyCode.DownArrow))
	    {
// 			max = guess;
// 			NextGuess();
	        GuessLower();
	    }
// 		 else if (Input.GetKeyDown(KeyCode.Return)) {
// 			print("I won!");
// 			StartGame();
		}

    void NextGuess()
    {
        guess = Random.Range(min, max + 1);
        print("Higher or lower than " + guess);
        print("Up = higher, down = lower, return = equal");
        // attritube of "Text"
        text.text = guess.ToString();
        // take the value of maxGuessesAllowed and minus 1 each time NextGuess(); is called
        maxGuessesAllowed = maxGuessesAllowed - 1;
        if (maxGuessesAllowed <= 0)
            // this will load our script in LevelManager
        {
            Application.LoadLevel("Win Screen");
        }
    }

    public void GuessHigher()
    {
        min = guess;
        NextGuess();
    }

    public void GuessLower()
    {
        max = guess;
        NextGuess();
    }

}
