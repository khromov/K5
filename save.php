<?php
    //Check for correct referrer to avoid people exploiting this
    
    header("Content-Type: text/plain");
    header("Content-Disposition: Attachment; filename=k5_".$_POST['k5-name']."_".date('H_i_s_Y_m_d').".txt");
    header("Pragma: no-cache");
    
	echo $_POST['k5-formcontent'];
?>