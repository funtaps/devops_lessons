<h1>Админка</h1>
<hr/>
<img src="./logo.jpg" />
<hr/>
<?php

echo rand(0, 100);
?>
<hr/>
<form method="POST" action="order.php">
    <input type="text" name="o_id" placeholder="Номер заказа"/>
    <input type ="submit" value="Найти"/>
</form>
