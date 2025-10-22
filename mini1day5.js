function marks(maths,science,tamil){
    let totalmarks=maths+science+tamil;
    let average= totalmarks/3;
    if (average>=90){
      console.log("Grade A");
    }else if(average>=75){
      console.log("Grade B");
    }else if(average>=50){
        console.log("Grade C");
    }else{
        console.log("Grade F");
    }
  console.log("Total Marks:",totalmarks);
  console.log("Average:",average);
}
marks(90,70,68);
