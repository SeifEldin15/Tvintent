<?php include "includes/new_post.php" ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" type="image/png" sizes="16x16" href="../plugins/images/icon.png">
    <title>Company Admin</title>
    <!-- Bootstrap Core CSS -->
    <link href="bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="../plugins/bower_components/bootstrap-extension/css/bootstrap-extension.css" rel="stylesheet">
    <!-- Wizard CSS -->
    <link href="../plugins/bower_components/jquery-wizard-master/css/wizard.css" rel="stylesheet">
    <!-- Menu CSS -->
    <link href="../plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.css" rel="stylesheet">
    <!-- animation CSS -->
    <link href="css/animate.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="css/style.css" rel="stylesheet">
    <!-- color CSS -->
    <link href="css/colors/blue.css" id="theme" rel="stylesheet">
    <link href="node_modules/froala-editor/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />

    <style>

        .div-photo{
        text-align:center;
        padding:3%;
        border:thin solid black;
        }

        .input-photo[type="file"]{
        display: none;
        }

        .label-photo{
        cursor:pointer;
        }

        #imageName{
        color:green;
        }
    </style>
            
</head>

<body>

    <?php include "includes/navbar.php";?> 

    <!-- Left navbar-header end -->
    <!-- Page Content -->
    <div id="page-wrapper">
        <div class="container-fluid">
            <div class="row bg-title">
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                    <h4 class="page-title"><?php echo $email;?></h4>
                </div>
                <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                    <ol class="breadcrumb">
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Posts</a></li>
                        <li class="active">New</li>
                    </ol>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- .row -->
            <div class="row">
                <div class="col-sm-12">
                    <div class="white-box">
                        <h3 class="box-title m-b-0">Create New Blog Post</h3>
                        <p class="text-muted m-b-30 font-13"> A blog post contains the picture, title and its content.
                        </p>
                        <div id="exampleValidator" class="wizard">
                            <ul class="wizard-steps" role="tablist">
                                <li class="active" role="tab">
                                    <h4><span><i class="ti-cloud-up"></i></span>photo</h4>
                                </li>
                                <li role="tab">
                                    <h4><span><i class="ti-marker-alt"></i></span>Title</h4>
                                </li>
                                <li role="tab">
                                    <h4><span><i class="ti-book"></i></span>Content</h4>
                                </li>
                            </ul>
                            <form id="validation" class="form-horizontal" method="post" enctype="multipart/form-data">
                                <div class="wizard-content">
                                    <div class="wizard-pane active" role="tabpanel">
                                        <div class="form-group">
                                            <label class="col-xs-3 control-label">photo</label>
                                            <div class="col-xs-5">
                                                <div class="div-photo">
                                                    <label   class="label-photo" for="inputTag">
                                                        Select Image <br />
                                                        <i class="fa fa-2x fa-camera"></i>
                                                        <input  name="picture" class="input-photo" id="inputTag" type="file" />
                                                        <br />
                                                        <span id="imageName"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="wizard-pane" role="tabpanel">
                                            <div class="form-group">
                                                <label class="col-xs-3 control-label">Post Title</label>
                                                <div class="col-xs-5">
                                                    <input type="text" class="form-control" name="title" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="wizard-pane" role="tabpanel">
                                            <div class="form-group">
                                                <label class="col-xs-3 control-label" >Content</label>
                                                <div class="col-xs-5">
                                                <textarea id="editor" name="editor"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="submit" name="submit" class="btn btn-outline">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
        <footer class="footer text-center"> 2018 &copy; Company Admin </footer>
    </div>
    <!-- /#page-wrapper -->
    <script src="https://use.fontawesome.com/3a2eaf6206.js"></script>
    <script type="text/javascript" src="node_modules/froala-editor/js/froala_editor.pkgd.min.js"></script>
    
    <script> var editor = new FroalaEditor('#editor'); </script>

    <script>
        let input = document.getElementById("inputTag");
        let imageName = document.getElementById("imageName")

        input.addEventListener("change", ()=>{
            let inputImage = document.querySelector("input[type=file]").files[0];

            imageName.innerText = inputImage.name;
        })
    </script>

</body>
</html>