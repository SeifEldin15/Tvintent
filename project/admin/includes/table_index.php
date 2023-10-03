<?php
    $sql= "SELECT * FROM posts LIMIT 3 ";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo '
            <tr>
                <td class="txt-oflo">'.$row["title"].'</td>
                <td class="txt-oflo">'.$row["created_at"].'</td>
                <td><span class="text-success">'.$row['content'].'</span></td>
                </tr>
            '; } 
        } else {
                echo "There are no posts";
    }
 ?>