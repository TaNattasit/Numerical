<?php
    require('./serverconnect.php');
    
    $EqName = $_POST["EqName"];
    $EqType = $_POST["EqType"];
    $EqDiff = $_POST["EqDiff"];

    $sql = "INSERT INTO equation (EQ_Name,EQ_Type,EQ_Diff) VALUES ('$EqName','$EqType','$EqDiff');";
    echo $sql;

  if($connect->query($sql) === TRUE){
        $check = array(1 => "success");
        echo json_encode($check);
  }
  else {
        $check = array(1 => "fail");
        echo json_encode($check);
  }

  $connect->close();

 ?>
