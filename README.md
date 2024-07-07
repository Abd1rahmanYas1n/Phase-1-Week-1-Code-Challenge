# Phase-1-Week-1-Code-Challenge

Challenge 1

Grade Generator

Overview
This program calculates and displays a student's grade based on their input marks. It asks the user to enter marks between 0 and 100, then determines the corresponding grade as follows:

A: 80 and above
B: 60 to 79
C: 50 to 59
D: 40 to 49
E: Less than 40

How to Use

Input: You'll be prompted to enter the student's marks. Only numbers from 0 to 100 are valid.
Output: The program will show the grade based on the entered marks.

Code Explanation
This code defines a function calculateStudentGrade() that:

1.Asks for input marks from the user.
2.Checks if the input is valid (between 0 and 100).
3.Determines the grade based on the input marks using if and else if statements.
4.Displays the grade using an alert box.

Error Handling

If you enter invalid marks (not a number or outside the range), you'll receive an alert informing you of the error.

Usage
To use the program:
Open the JavaScript console in your web browser.
Copy and paste the code into the console.
Call the calculateStudentGrade() function to start the program.

Challenge 2

Overview

This program checks the speed of a car and calculates demerit points based on how much the speed exceeds the limit. If the speed is less than or equal to 70 km/h, it prints "OK". For speeds exceeding 70 km/h, it calculates demerit points: one point for every 5 km/h over the limit. If the total demerit points exceed 12, it prints "License suspended".

How to Use

Input: Enter the speed of the car in km/h when prompted.
Output: The program will either print "OK" if the speed is within the limit or display the total demerit points if the speed exceeds the limit.

Code Explanation
The code defines a function checkSpeed(speed) that:

Sets the speed limit to 70 km/h and the demerit point increment to 5 km/h.
Checks if the speed is below or equal to 70 km/h and prints "OK".
Calculates demerit points if the speed exceeds 70 km/h using the formula (speed - speedLimit) / PointOverSpeedLimit.
Prints the total demerit points and checks if they exceed 12 to determine if the license should be suspended.

Usage
To use the program:

Open the JavaScript console in your web browser.
Copy and paste the code into the console.
Call the checkSpeed(speed) function with the desired speed value to start the program.

Challenge 3

Overview
This program calculates an individual's net salary based on their basic salary and benefits. It incorporates tax calculations (PAYE), deductions for NHIF and NSSF, and computes both gross and net salary.

How to Use
Input: Provide the basic salary and any benefits when prompted.
Output: The program will display the gross salary, deductions (PAYE, NHIF, NSSF), and net salary after deductions.

Code Explanation
The code defines a function calculateNetSalary(basicSalary, benefits) that:

Prompts the user to input the basic salary and benefits.
Validates the input and calculates PAYE (income tax), NHIF deduction, and NSSF contribution based on predefined rules and rates.
Computes the gross salary by adding benefits to the basic salary.
Calculates the net salary by subtracting PAYE, NHIF, and NSSF deductions from the gross salary.

Usage
To use the program:

Open the JavaScript console in your web browser.
Copy and paste the code into the console.
Call the calculateNetSalary(basicSalary, benefits) function with appropriate values to start the program.
