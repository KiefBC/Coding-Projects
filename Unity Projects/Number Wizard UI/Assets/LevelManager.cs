using UnityEngine;
using System.Collections;

public class LevelManager : MonoBehaviour {

    // by adding an argument to the function, we can get a box in unity
    public void LoadLevel(string name)
    {
        // comments in the console in unity
        Debug.Log("Level load requested for: " + name);
        // this will give us an argument to load a specific scene within unity
        Application.LoadLevel(name);
    }

    public void QuitRequest()
    {
        Debug.Log("I want to quit, sucker!");
        Application.Quit();
    }

}
