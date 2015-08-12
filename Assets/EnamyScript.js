#pragma strict

function Update () {
	transform.position.z-=0.1;
	transform.Rotate(2,1,1);
	if(transform.position.z < -12.0){
		Application.LoadLevel("GameOver");
	}
}

function OnCollisionEnter(){
	Destroy(gameObject);
}