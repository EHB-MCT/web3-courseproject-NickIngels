//
//  ViewController.swift
//  NotificationApp
//
//  Created by Nick Ingels on 06/11/2021.
//  Copyright © 2021 EHB. All rights reserved.
//

import UIKit
import UserNotifications

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        let center = UNUserNotificationCenter.current()
        
        center.requestAuthorization(options: [.alert, .sound]) { (granted, error) in
            
        }
        
        
    }


}

