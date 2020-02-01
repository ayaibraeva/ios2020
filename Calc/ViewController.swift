//
//  ViewController.swift
//  Calc
//
//  Created by Ayaulym Ibrayeva on 1/31/20.
//  Copyright © 2020 Ayaulym Ibrayeva. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    var numberFromScreen:Double=0;
    var operation:Int = 0;
    var firstNum:Double=0;
    var mathSign:Bool = false;
    var stillType:Bool = false;
    var dotIsPlaced:Bool = false;
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBOutlet weak var result: UILabel!

    @IBAction func digits(_ sender: UIButton) {
        if mathSign == true   {
            result.text =  String(sender.tag)
            mathSign = false
        }
        else{
            result.text = result.text! + String(sender.tag)
        }
        
        numberFromScreen = Double(result.text!)!
    }
    
    
    @IBAction func buttons(_ sender: UIButton) {
        
        if result.text != "" && sender.tag != 10 && sender.tag != 15  {
            firstNum = Double(result.text!)!
            if sender.tag == 11 {
                result.text = "/";

            }
           else  if sender.tag == 12{
                result.text = "x";

            }
            else if sender.tag == 13{
              result.text = "-";

            }
            else if sender.tag==14{
                result.text = "+";
            }
            else if sender.tag == 16{
                result.text = String (firstNum / 100);
            } else if sender.tag == 19 {
                result.text = String(numberFromScreen * numberFromScreen)
            }
            
            
            
            operation = sender.tag
            mathSign = true;
        }
            else if sender.tag == 15{
                //podschet
                if operation == 11 {
                    result.text = String(firstNum / numberFromScreen)
                }
            else if operation == 12 {
                               result.text = String(firstNum * numberFromScreen)
                           }
            else if operation == 13 {
                result.text = String(firstNum - numberFromScreen)
            }
            else if operation == 14 {
                result.text = String(firstNum + numberFromScreen)
            }
                
            }
       
            
        else if sender.tag == 10 {
            result.text = ""
            firstNum = 0
            numberFromScreen=0
            operation = 0
        }
        }
    
    @IBAction func dot(_ sender: UIButton) {
        if result.text != "" && !dotIsPlaced {
            result.text = result.text! + "."
            dotIsPlaced = true
        } else if result.text == "" && !dotIsPlaced{
            result.text = "0."
            dotIsPlaced = true
        }
    }
    
    @IBAction func changeOfSign(_ sender: UIButton) {
        if result.text != "" {
            result.text = String(numberFromScreen * -1)
       
            
        }
        
        
    }
    
   
    
    
}
    


