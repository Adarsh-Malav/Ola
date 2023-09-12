        function openNav() {
        document.getElementById("sideNavbar").style.width = "376px";
        // let counter=0;
        // counter=counter+1;
        // console.log(counter);

        }

        function closeNav() {
        document.getElementById("sideNavbar").style.width = "0";
        }

    
        function daily(){
            document.getElementById("rental").style.borderBottom = "none";
            document.getElementById("rental1").style.fontWeight="500"

            document.getElementById("daily").style.borderBottom = "2px solid black";
            document.getElementById("daily1").style.fontWeight="600"

            document.getElementById("outstation").style.borderBottom = "none";
            document.getElementById("outstation1").style.fontWeight="500"
        }

        function rental(){
            document.getElementById("rental").style.borderBottom = "2px solid black";
            document.getElementById("rental1").style.fontWeight="600"

            document.getElementById("daily").style.borderBottom = "none";
            document.getElementById("daily1").style.fontWeight="500"

            document.getElementById("outstation").style.borderBottom = "none";
            document.getElementById("outstation1").style.fontWeight="500"
        }
       
        function outstation(){
            document.getElementById("rental").style.borderBottom = "none";
            document.getElementById("rental1").style.fontWeight="500"

            document.getElementById("daily").style.borderBottom = "none";
            document.getElementById("daily1").style.fontWeight="500"

            document.getElementById("outstation").style.borderBottom = "2px solid black";
            document.getElementById("outstation1").style.fontWeight="600"
        }