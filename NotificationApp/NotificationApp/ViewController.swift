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
        let notificatie = UNUserNotificationCenter.current()
        
        notificatie.requestAuthorization(options: [.alert, .sound]) { (granted, error) in
            
        }
        
        let inhoud = UNMutableNotificationContent()
        inhoud.title = "Dit is een notificatietest"
        inhoud.body = "Ik ben je notificatie"
        
        let datum = Date().addingTimeInterval(10)
        let datumComponents = Calendar.current.dateComponents([.year, .month, .day, .hour, .minute, .second], from: datum)
         
        let trigger = UNCalendarNotificationTrigger(dateMatching: datumComponents, repeats: false)
        
        let uuid = UUID().uuidString
        
        let request = UNNotificationRequest(identifier: uuid, content: inhoud, trigger: trigger)
        
        notificatie.add(request) { (error) in
            
        }
    }


}

