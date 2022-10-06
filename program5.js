// Read about the Tower of Hanoi algorithm. Write a program to implement it.


function towerOfHanoi(num, from_rod,  to_rod,  aux_rod)
{
        if (num == 0)
        {
            return;
        }
        towerOfHanoi(num - 1, from_rod, aux_rod, to_rod);
        console.log(" TOH: Move disk " + num + " from rod " + from_rod +
        " to rod " + to_rod);
        towerOfHanoi(num - 1, aux_rod, to_rod, from_rod);
    }
    const num = 4;
    towerOfHanoi(num, 'A', 'C', 'B'); 
