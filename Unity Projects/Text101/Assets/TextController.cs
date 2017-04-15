using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class TextController : MonoBehaviour
{

    public Text text;

    private enum States { cell, mirror, sheets_0, lock_0, cell_mirror, sheets_1, lock_1, corridor_0, stairs_0, floor, closet_door, stairs_1, corridor_1, in_closet, stairs_2, corridor_2, courtyard, corridor_3};
    private States myState;

    // Use this for initialization
    void Start()
    {
        myState = States.cell;
    }

    // Update is called once per frame
    void Update()
    {
        print(myState);
        if (myState == States.cell) { cell(); }
        else if (myState == States.sheets_0) { sheets_0(); }
        else if (myState == States.sheets_1) { sheets_1(); }
        else if (myState == States.lock_0) { lock_0(); }
        else if (myState == States.lock_1) { lock_1(); }
        else if (myState == States.mirror) { mirror(); }
        else if (myState == States.cell_mirror) { cell_mirror(); }
        else if (myState == States.corridor_0) { corridor_0(); }
        else if (myState == States.stairs_0) { stairs_0(); }
        else if (myState == States.floor) { floor(); }
        else if (myState == States.closet_door) { closet_door(); }
        else if (myState == States.stairs_1) { stairs_1(); }
        else if (myState == States.corridor_1) { corridor_1(); }
        else if (myState == States.in_closet) { in_closet(); }
        else if (myState == States.stairs_2) { stairs_2(); }
        else if (myState == States.corridor_2) { corridor_2(); }
        else if (myState == States.courtyard) { courtyard(); }
        else if (myState == States.corridor_3) { corridor_3(); }
    }

    /*METHODS START HERE*/

    #region State Handler Methods

        #region Scene 1

    void cell()
    {
        text.text = "Nice looking cell. L for Lock, M for Mirror, S for Sheets";
        if (Input.GetKeyDown(KeyCode.S)) { myState = States.sheets_0; }
        else if (Input.GetKeyDown(KeyCode.M)) { myState = States.mirror; }
        else if (Input.GetKeyDown(KeyCode.L)) { myState = States.lock_0; }
    }

    void mirror()
    {
        text.text = "The dirty old mirror on the wall seems loose.\n\n" +
                    "Press T to Take the mirror, or R to Return to cell";
        if (Input.GetKeyDown(KeyCode.T)) { myState = States.cell_mirror; }
        else if (Input.GetKeyDown(KeyCode.R)) { myState = States.cell; }
    }

    void cell_mirror()
    {
        text.text = "You are still in your cell, and you STILL want to escape! There are " +
                    "some dirty sheets on the bed, a mark where the mirror was, " +
                    "and that pesky door is still there, and firmly locked!\n\n" +
                    "Press S to view Sheets, or L to view Lock";
        if (Input.GetKeyDown(KeyCode.S)) { myState = States.sheets_1; }
        else if (Input.GetKeyDown(KeyCode.L)) { myState = States.lock_1; }
    }

    void sheets_0()
    {
        text.text = "You can't believe you sleep in these things. Surely it's " +
                    "time somebody changed them. The pleasures of prison life " +
                    "I guess!\n\n" +
                    "Press R to Return to roaming your cell";
        if (Input.GetKeyDown(KeyCode.R)) { myState = States.cell; }
    }

    void sheets_1()
    {
        text.text = "Holding a mirror in your hand doesn't make the sheets look " +
                    "any better.\n\n" +
                    "Press R to Return to roaming your cell";
        if (Input.GetKeyDown(KeyCode.R)) { myState = States.cell_mirror; }
    }

    void lock_0()
    {
        text.text = "This is one of those button locks. You have no idea what the " +
                    "combination is. You wish you could somehow see where the dirty " +
                    "fingerprints were, maybe that would help.\n\n" +
                    "Press R to Return to roaming your cell";
        if (Input.GetKeyDown(KeyCode.R)) { myState = States.cell; }
    }

    void lock_1()
    {
        text.text = "You carefully put the mirror through the bars, and turn it round " +
                    "so you can see the lock. You can just make out fingerprints around " +
                    "the buttons. You press the dirty buttons, and hear a click.\n\n" +
                    "Press O to Open, or R to Return to your cell";
        if (Input.GetKeyDown(KeyCode.O)) { myState = States.corridor_0; }
        else if (Input.GetKeyDown(KeyCode.R)) { myState = States.cell_mirror; }
    }

    #endregion
        #region Scene 2
    void corridor_0()
    {
        text.text = "You are FREE! Press P to return in the cell and play again\n\n" +
                    "Now that we are out of the cell... we need to escape the prison!\n" +
                    "Go up the stairs Press S\n" +
                    "Go to the closet door, press C\n" +
                    "Run down the floor like a monkey, press F";
        if (Input.GetKeyDown(KeyCode.P)) { myState = States.cell; }
        else if (Input.GetKeyDown(KeyCode.S)) { myState = States.stairs_0; }
        else if (Input.GetKeyDown(KeyCode.F)) { myState = States.floor; }
        else if(Input.GetKeyDown(KeyCode.C)) { myState = States.closet_door; }
    }

    void stairs_0()
    {
        text.text = "You are now at the stairs. sUDDENING YOU FIND YOURSELF WANTING TO GO BACK.\n" +
                    "Press R to return to the corridor_0";
        if (Input.GetKeyDown(KeyCode.R)) { myState = States.corridor_0; }
    }

    void floor()
    {
        text.text = "You are inspecting the floor. SO pretty. So, so, so pretty.\n" +
                    "Hey look.. a hair clip. Let's take it. Press H\n" +
                    "Press R to return to the base corridor";
        if (Input.GetKeyDown(KeyCode.R)) { myState = States.corridor_0; }
        else if (Input.GetKeyDown(KeyCode.H)) { myState = States.corridor_1; }
    }

    void closet_door()
    {
        text.text = "You are now at the doors of the mighty closet. But you know damn well this is dumb\n" +
                    "Press R to return to the base corridor";
        if (Input.GetKeyDown(KeyCode.R)) { myState = States.corridor_0; }
    }

    void stairs_1()
    {
        text.text = "Oh wow, such nice stairs\n" +
                    "It is scary to go up them. Press R to return.";
        if (Input.GetKeyDown(KeyCode.R)) { myState = States.corridor_1; }
    }

    void corridor_1()
    {
        text.text = "This second corridor looks a bit fishy.\n" +
                    "You see a set of stairs to the right of you. Press S" +
                    "With your new found hair clip, maybe you can unlock... pick the closet door! Press P";
        if (Input.GetKeyDown(KeyCode.S)) { myState = States.stairs_1; }
        else if (Input.GetKeyDown(KeyCode.P)) { myState = States.in_closet;}
    }

    void in_closet()
    {
        text.text = "With this god damn hair clip, you decide to pick the freaking door!\n" +
                    "You notice theres a set of clothes in here... if you want to change your clothes, press D" +
                    "With a stronger sense of judgment, you decide to go man up and run up those bloody stairs! Press R";
        if (Input.GetKeyDown(KeyCode.D)) { myState = States.corridor_3; }
        else if (Input.GetKeyDown(KeyCode.R)) { myState = States.corridor_2; }

    }

    void stairs_2()
    {
        text.text = "Half way up the stairs you realize that you are sad and weak.\n" +
                    "Press R to return to the corridor";
        if (Input.GetKeyDown(KeyCode.R)) { myState = States.corridor_2; }
    }

    void corridor_2()
    {
        text.text = "Back at the corridor, stronger, smarter, and a more slightly bent Hairclip\n" +
                    "You decide to man up and run up the stairs. What can stop you?! NOTHING! Press S" +
                    "Press R to return to the closet because you are scared";
        if (Input.GetKeyDown(KeyCode.R)) { myState = States.in_closet; }
        else if (Input.GetKeyDown(KeyCode.S)) { myState = States.stairs_2; }
    }

    void courtyard()
    {
        text.text = "You are free! RUN FAST NOW QUICK!\n" +
                    "THE END Press P to start over in the cell";
        if (Input.GetKeyDown(KeyCode.P)) { myState = States.cell; }
    }

    void corridor_3()
    {
        text.text = "Sweat, tired, and possibly hungry, you arrive in the final corridor... you think.\n" +
                    "You see some light ahead in your dark musky dungeon of a prison." +
                    "Proceed to the light, press S otherwise turn around and head back by pressing R";
        if (Input.GetKeyDown(KeyCode.R)) { myState = States.corridor_0; }
        else if (Input.GetKeyDown(KeyCode.S)) { myState = States.courtyard; }
    }
    #endregion

    #endregion


}

// change freedom to cooridor_0 - change line in update, rename state method, update text, update keypress, ands think
// where does lock_1 take you?