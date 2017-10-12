using UnityEngine;
using System.Collections;
using System.Collections.Generic; 

public class GunSwitch : MonoBehaviour {

	//public GameObject[] weapons = new GameObject[5] ;
	public List<GameObject> weapons = new List<GameObject>() ;
	public int i ;

	public int selectedWeapon ;			//Selected Weapon!!!
	private int previousNumber ;

	[HideInInspector]
	public GunsAccept gunTake ;
	[HideInInspector]
	public GrenadeAccept grenadeTake;

	public int countChild = 3;				//Active children counts

	// instance for Animator
	public Animator animator ;
	public Animator animatorMakarov ;

	// Use this for initialization
	void Start () 
	{
		gunTake = GameObject.Find("SampleGun").GetComponent<GunsAccept>() ;			//for MachineGun01
		grenadeTake = GameObject.Find("SampleHandGrenade").GetComponent<GrenadeAccept>() ;
		animatorMakarov = GameObject.Find("Makarov").GetComponent<Animator>() ;
		//animator.SetBool ("Makarov", true);	

		selectedWeapon = 0 ;
		countChild = 2;
		weapon() ;
	}
	
	// Update is called once per frame
	void Update () 
	{
		previousNumber = selectedWeapon ;

		if(Input.GetKeyDown(KeyCode.Y))
		{
			selectedWeapon = 0 ; 
		}

		if(Input.GetKeyDown(KeyCode.U))
		{
			selectedWeapon = 1 ; 
		}
		if(Input.GetKeyDown(KeyCode.I))
		{
			selectedWeapon = 2 ; 
		}
		if(Input.GetKeyDown(KeyCode.O))
		{
			selectedWeapon = 3 ; 
		}
		if(Input.GetKeyDown(KeyCode.P))
		{
			selectedWeapon = 4 ; 
		}

		if(Input.GetAxis("Mouse ScrollWheel") > 0f )			//+ve
		{
			
			if(selectedWeapon >= countChild )		
			{
				selectedWeapon = 0 ;
			}
			else
			{
				selectedWeapon++ ;			
			}
		}

		if(Input.GetAxis("Mouse ScrollWheel") < 0f )			//-ve
		{
			if(selectedWeapon <= 0 )
			{
				selectedWeapon = countChild ;
			}
			else
			{
				selectedWeapon-- ;
			}
		}


		if(previousNumber != selectedWeapon)
		{
			weapon() ;
		}

		//Adding MachineGun01 to the weapon list!
		if(gunTake.gunAccept == true)
		{
			//add a weapon to an array
			weapons.Add(gunTake.realGun) ;
			gunTake.gunAccept = false ;
			countChild++ ;
			gunTake.realGun.SetActive (false);
			weapon ();

		}

		//Adding grenade to the weapon list!
		if(grenadeTake.grenadeAccept == true)
		{
			//add a weapon to an array
			weapons.Add(grenadeTake.realGrenade) ;
			grenadeTake.grenadeAccept = false ;
			countChild++ ;
			grenadeTake.realGrenade.SetActive (false);
			weapon ();
		}

			
	}

	public void weapon( )	
	{
		for(i = 0 ; i <= weapons.Count ; i++)
		{
			if( i == selectedWeapon )
			{
				weapons[i].gameObject.SetActive(true) ;
			}
			else
			{
				//Invoke ("waitTime", 5);
				StartCoroutine(waitTime(i)) ;
				//weapons[i].gameObject.SetActive(false) ;
			}

			if (weapons [0].gameObject.activeSelf) 
			{
				animator.SetBool ("Makarov", false);	
				animator.SetBool ("AK-47", true);
				animator.SetBool ("UMP-45", false);
				animator.SetBool ("HandGrenade", false);

			}
			else if (weapons [1].gameObject.activeSelf) 
			{
				Debug.Log ("in the first gun");
				animator.SetBool ("Makarov", false);	
				animator.SetBool ("AK-47", false);
				animator.SetBool ("UMP-45", true);
				animator.SetBool ("HandGrenade", false);

				//if ((Input.GetKey (KeyCode.Q)) || (Input.GetAxis ("Mouse ScrollWheel") > 0f)) 
				//{
				//	animatorMakarov.SetBool ("draw", true);
				//}
			}
			else if (weapons [2].gameObject.activeSelf) 
			{
				animator.SetBool ("Makarov", false);	
				animator.SetBool ("AK-47", false);
				animator.SetBool ("UMP-45", false);
				animator.SetBool ("HandGrenade", true);
			}

			else if (weapons [3].gameObject.activeSelf) 
			{
				animator.SetBool ("Makarov", true);	
				animator.SetBool ("AK-47", false);
				animator.SetBool ("UMP-45", false);
				animator.SetBool ("HandGrenade", false);
			}
		}
	}

	IEnumerator waitTime(int i)
	{
		yield return new WaitForSeconds(0.60f); 
		weapons[i].gameObject.SetActive(false) ;
	}
}