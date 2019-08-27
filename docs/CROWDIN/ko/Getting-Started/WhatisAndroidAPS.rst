What is a closed loop system with AndroidAPS?
****************************

AndroidAPS is a app that acts as an artificial pancreas system (APS) on an Android smartphone. What is an artificial pancreas system? It is a software program that aims to do what a living pancreas does: keep blood sugar levels within healthy limits automatically. 

An APS can't do the job as well as a biological pancreas does, but it can make type 1 diabetes easier to manage using devices that are commercially available and software that is simple and safe. Those devices include a continuous glucose monitor (CGM) to tell AndroidAPS about your blood sugar levels and an insulin pump which AndroidAPS controls to deliver appropriate doses of insulin. The app communicates with those devices via bluetooth. It makes its dosing calculations using an algorithm, or set of rules, developed for another artificial pancreas system, called OpenAPS, which has thousands of users and has accumulated millions of hours of use. 

A note of caution: AndroidAPS is not regulated by any medical authority in any country. Using AndroidAPS is essentially carrying out a medical experiment on yourself. Setting up the system requires determination and technical knowledge. If you don't have the technical know-how at the beginning, you will by the end. All the information you need can be found in these documents, elsewhere online, or from others who have already done it -- you can ask them in Facebook groups or other forums. Many people have successfully built AndroidAPS and are now using it entirely safely, but it is essential that every user:

* Builds the system themselves so that they thoroughly understand how it works
* Adjusts its individual dosage algorithm with his or her diabetes team to work nearly perfect
* Maintains and monitors the system to ensure it is working properly

.. note:: 
	**고지사항 및 경고문**

	이곳에 설명된 모든 정보, 생각, 코드는 오직 정보제공 및 교육적 목적으로만 제공된 것입니다. Nightscout은 현재 HIPAA 개인 정보 보호 준수 규약을 따르지 않습니다. Nightscout와 AndroidAPS를 본인의 책임하에 사용하세요. 의학적 결정을 위해 이 정보와 코드를 사용하지 마세요.

	github.com의 코드를 사용함에 있어 어떤 보증이나 공식적인 지원은 없습니다. 자세한 것은 이 곳의 라이센스에 대한 자세한 내용을 참고하세요.

	* 모든 제품명, 회사명, 상표, 서비스표, 등록상표, 등록 서비스표는 해당 소유자의 고유 재산입니다. 그것들을 사용한 것은 정보를 제공하기 위한 목적이며, 그들과의 제휴 또는 보증을 의미하지는 않습니다.

	Please note - this project has no association with and is not endorsed by: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ or `Medtronic <http://www.medtronic.com/>`_.
	
If you're ready for the challenge, please read on. 

Primary goals behind AndroidAPS
===========================================

* An app with safety built in. To read about the safety features of the algorithms, known as oref0 and oref1, click here (https://openaps.org/reference-design/)
* An all-in-one app for managing type 1 diabetes with an artificial pancreas and Nightscout
* An app to which users can easily add or remove modules as needed
* An app with different versions for specific locations and languages.
* An app which can be used in open- and closed-loop mode
* An app that is totally transparent: users can input parameters, see results, and make the final decision
* An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves 
* An app closely integrated with Nightscout
* An app in which the user is in control of safety constraints 

How to start
===============
Of course, all of this content here is very important, but can be in the beginning quite confusing.
A good orientation is given by the `Module Overview <./Module/index.html>`_ and the `Objectives <./Usage/Objectives.html>`_. You can also take a look on the `sample setup with Dana, Dexcom and Sony Smartwatch <../Getting-Started/Sample-Setup.md>`_.
 
