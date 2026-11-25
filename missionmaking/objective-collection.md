---
layout: default
title: Objective Collection
category: Mission Making
---

# Objective Collection

## Summary

This document contains a list of possible Objectives for our Zeus players and Mission Makers

<div class="objective-chart">

  <div class="objective-header">
    <h2>Mission Objectives</h2>
    <p>Overview of available enemy infrastructure and strategic objectives.</p>
    <input
      type="search"
      id="objectiveSearch"
      placeholder="Search objectives..."
      aria-label="Search mission objectives"
    >
  </div>

  <div class="objective-list" id="objectiveList">

    <!-- FORWARD OPERATING BASE -->
    <details class="objective">
      <summary>Forward Operating Base (FOB)</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>A fortified base used for staging operations, housing troops, storing supplies, and coordinating attacks.</p>

        <h3>Why does it exist?</h3>
        <p>Main base of operations for the enemy, holds troops and infrastructure for front-line operations.</p>

        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Enemy loses ability to deploy QRF from this position.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Enemy deploys QRF from this position.</li>
            </ul>
          </div>
        </div>

        <h3>Additional Notes</h3>
        <p>Can house one or several other (sub-)objectives from this list, unified in the one compound.</p>
      </div>
    </details>

    <!-- CHECKPOINTS -->
    <details class="objective">
      <summary>Checkpoints</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Manned positions along roads or strategic points used to monitor and control movement, often equipped with barricades and armed guards.</p>

        <h3>Why does it exist?</h3>
        <p>Control/prevent passage through strategic points. Regulate and monitor traffic, report suspicious movements.</p>

        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>More freedom of movement for friendly, allied units and civilians.</li>
              <li>Enemy control over critical infrastructure (roads) is weakened.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Increased enemy awareness of friendly movements.</li>
              <li>Less freedom of movement for friendly, allied units and civilians.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>N/A</p>
      </div>
    </details>

    <!-- RADAR / COMMUNICATION -->
    <details class="objective">
      <summary>Radar/Communication Stations</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Installations used for surveillance, communication, and tracking enemy movements within the area.</p>

        <h3>Why does it exist?</h3>
        <p>Conduct surveillance and tracking of troop movements. Provide sensor/tracking data on vehicles and aircraft to connected defence batteries. Facilitate communication between installations and to High Command ("orbital command").</p>

        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Delayed responses due to degraded communications.</li>
              <li>Less effective vehicle/aircraft tracking.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Better responses do player actions due to high-performance comms.</li>
              <li>Increasingly effective aircraft/vehicle tracking.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>Could potentially include an Officer HVT who serves as the "Comms Coordinator".</p>
      </div>
    </details>

    <!-- VEHICLE DEPOTS -->
    <details class="objective">
      <summary>Vehicle Depots</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Vehicle depots serve as storage and maintenance facilities for enemy vehicles, including armoured vehicles, tanks, trucks, and other motorised assets.</p>

        <h3>Why does it exist?</h3>
        <p>Maintain and store vehicles.</p>

        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Delayed response times for deploying vehicles.</li>
              <li>Long-term: Poor vehicle performance due to lack of maintenance leads to degraded performance.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Continuous adequate maintenance and operational availability of vehicles.</li>
              <li>Ability to salvage/repair vehicle casualties from prior engagements, replenishing vehicle losses to an extent.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>Would usually be found close to or inside a bigger FOB.</p>
      </div>
    </details>

    <!-- SUPPLY DEPOTS -->
    <details class="objective">
      <summary>Supply Depots</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Storage areas for ammunition, weapons, and other essential supplies crucial for the enemy faction's operations.</p>

        <h3>Why does it exist?</h3>
        <p>Logistical hub to supply and sustain operations.</p>

        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Disrupt enemy logistics, longer response time for QRFs.</li>
              <li>Long-term Effect: Decreased combat effectiveness due to impending shortages.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Continuous adequate supply of troops.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>Would usually be found close to or inside a bigger FOB.</p>
      </div>
    </details>

    <!-- FUEL DEPOT -->
    <details class="objective">
      <summary>Fuel Depot</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>A facility storing fuel for vehicles and aircraft, making it a strategic target for disruption.</p>

        <h3>Why does it exist?</h3>
        <p>Sustain aircraft and vehicle operations.</p>

        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Limit enemy mobility, hamper vehicle and aerial support due to fuel shortages.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Maintain mobility, easier to conduct vehicle and aerial operations.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>Would usually be found close to or inside a bigger FOB/Airfield/Vehicle Depot.</p>
      </div>
    </details>

    <!-- ARTILLERY -->
    <details class="objective">
      <summary>Artillery/IDF Emplacements</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Fixed positions for mortars, heavy artillery or missile launchers used to provide fire support or bombard enemy positions.</p>
        <h3>Why does it exist?</h3>
        <p>Indirect Fire Support, Bombardments, Area Denial.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Enemy loses ability to call upon Indirect Fire Support.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Enemy continues to use IDF to counter friendly movements.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>Could be connected with a nearby Supply Depot to ensure steady flow of ammunition.</p>
      </div>
    </details>

    <!-- TRAINING CAMPS -->
    <details class="objective">
      <summary>Training Camps</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Locations where enemy troops are trained, possibly containing shooting ranges, obstacle courses, and barracks.</p>
        <h3>Why does it exist?</h3>
        <p>Educate new recruits and insurgent forces. Train existing personnel to a higher standard.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Slows enemy troop reinforcements.</li>
              <li>Lowers overall enemy performance due to halting training efforts.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Enemy is able to replenish lost force more quickly.</li>
              <li>Higher overall training standard leads to improved troop performance.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>N/A</p>
      </div>
    </details>

    <!-- PRISON CAMPS -->
    <details class="objective">
      <summary>Prison Camps</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Facilities used to detain captured soldiers or civilians, requiring rescue or liberation missions.</p>
        <h3>Why does it exist?</h3>
        <p>Detain and question captured personnel. Use captives as leverage in negotiations.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Possibility to gather relevant intel from liberated detainees.</li>
              <li>Deny the enemy access to information and leverage.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Enemy is able to extract sensitive information from captives.</li>
              <li>Loss of friendly personnel.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>N/A</p>
      </div>
    </details>

    <!-- AIRFIELDS -->
    <details class="objective">
      <summary>Airfields/Helipads</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Bases for enemy aircraft or helicopters used for transportation, reconnaissance, or airstrikes.</p>
        <h3>Why does it exist?</h3>
        <p>Store, maintain and deploy aerial assets for recon, transport, CAP and attack duties.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Increased response time for enemy air support.</li>
              <li>Lack of maintenance on aircraft leads to degraded combat performance in the long term.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Enemy is able to continuously challenge aerial superiority.</li>
              <li>Good aircraft maintenance leads to improved combat performance.</li>
              <li>Enemy may be able to salvage damaged aircraft and repair them to combat effectiveness, thus partially replenishing losses.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>Would usually be accompanied by fuel and supply depots as well as radar stations and air defence batteries for best performance.</p>
      </div>
    </details>

    <!-- INTEL CENTERS -->
    <details class="objective">
      <summary>Intel Centers</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Facilities where enemy intelligence and information are gathered, analysed, and stored.</p>
        <h3>Why does it exist?</h3>
        <p>Gather, analyse and process data in an attempt to extrapolate friendly troop movements.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Reduce enemy awareness of friendly plans.</li>
              <li>Potentially succeed in disseminating falsified information in order to confuse the enemy.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Improved enemy ability and predict and respond to friendly operations.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>Could potentially include an Enemy HVT who serves as the leading Intel Officer.</p>
      </div>
    </details>

    <!-- WEAPON MANUFACTURING -->
    <details class="objective">
      <summary>Weapon/Ammo Manufacturing Facilities</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Sites where weapons and ammunition are produced or modified, potentially containing manufacturing equipment or armouries.</p>
        <h3>Why does it exist?</h3>
        <p>Manufacture, maintain, improve weapons and their ammo.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Reduces enemy access to new weapons.</li>
              <li>Lack of weapon service and improvements leads to degraded combat effectiveness.</li>
              <li>Decreased combat effectiveness and support availability due to ammo shortages.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Good maintenance and new weapon improvements lead to improved combat effectiveness.</li>
              <li>Surplus of ammo leads to more liberal use of supports.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>N/A</p>
      </div>
    </details>

    <!-- MEDICAL FACILITIES -->
    <details class="objective">
      <summary>Medical/Droid Repair Facilities</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Hospitals or field clinics where injured enemy soldiers are treated, requiring discretion to avoid civilian casualties. Analogous to Droid Repairs.</p>
        <h3>Why does it exist?</h3>
        <p>Help injured personnel recover to combat effectiveness.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Increases overall enemy casualties as injured personnel can no longer be sufficiently cared for.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Enemy is able to replenish their casualties more quickly as adequate medical care allows them to return to combat effectiveness more readily.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>Interesting moral question whether purely medical installations should be considered as viable military targets.</p>
      </div>
    </details>

    <!-- BARRICADES -->
    <details class="objective">
      <summary>Barricades/Blockades</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Physical barriers like roadblocks, walls, or fences erected to control movement or impede progress. Usually not explicitly guarded, unlike Checkpoints. May be trapped to deter attackers.</p>
        <h3>Why does it exist?</h3>
        <p>Restrict/delay access to areas.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>More freedom of movement for friendly, allied units and civilians.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Less freedom of movement for friendly, allied unit and civilians.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>N/A</p>
      </div>
    </details>

    <!-- CACHES -->
    <details class="objective">
      <summary>Caches/Hidden Stashes</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Secretly stored supplies, weapons, or equipment scattered throughout the area for resupply or emergencies.</p>
        <h3>Why does it exist?</h3>
        <p>Store supplies and equipment in concealed locations, used by insurgents or to facilitate emergency resupplies.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Enemy won’t be able to make use of stashed emergency supplies.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Access to stashed emergency supplies may enable the enemy to recover lost ground when they’re being pushed back.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>Caches may be intentionally placed and trapped as a lure.</p>
      </div>
    </details>

    <!-- PROPAGANDA -->
    <details class="objective">
      <summary>Propaganda Centers</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Buildings or installations used for disseminating enemy propaganda or controlling public perception.</p>
        <h3>Why does it exist?</h3>
        <p>Influence public opinion, mobilise civilian resistance. Disseminate false information to friendly Intelligence.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Reduce enemy’s influence over the local population.</li>
              <li>Improves quality and reliability of friendly intel.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Enemy continues to spread misinformation to friendly intelligence, further falsifying reports and degrading the quality of the intel.</li>
              <li>Local population may be drawn fully or in part to the enemy’s side.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>N/A</p>
      </div>
    </details>

    <!-- MINEFIELDS -->
    <details class="objective">
      <summary>Minefields/Traps</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Areas seeded with mines or booby traps to impede movement or create hazards for the player.</p>
        <h3>Why does it exist?</h3>
        <p>Impede friendly movements.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Clears path for friendly forces and civilians.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Movement of friendly forces and civilians is further impeded and threatened by hazards.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>Unless driven into a corner, the enemy will not trap/mine their own infrastructure. They might, however, trap an obvious route/point of entry, while they themselves use an alternative passage to circumvent their trap(s).</p>
      </div>
    </details>

    <!-- REINFORCEMENT POINTS -->
    <details class="objective">
      <summary>Reinforcement Points</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Designated areas where enemy forces are called in for reinforcement during engagements.</p>
        <h3>Why does it exist?</h3>
        <p>Bolster own defences along the obvious avenue of approach. Overwhelm/entrap attackers by guiding them into the reinforcement point.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Denies the enemy the ability to call upon and utilise their reinforcements effectively.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Permit the enemy to continuously reinforce their position and bolster their defences.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>N/A</p>
      </div>
    </details>

    <!-- SURVEILLANCE -->
    <details class="objective">
      <summary>Surveillance Drones/Scout Posts</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Locations or airborne drones used for reconnaissance to gather intelligence on the player's movements.</p>
        <h3>Why does it exist?</h3>
        <p>Provide reconnaissance and active guidance for (indirect) fire support systems.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Enemy loses accurate information on friendly troop movements.</li>
              <li>Accuracy of (indirect) fire support orders is greatly reduced.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Accuracy of (indirect) fire support order is improved.</li>
              <li>Enemy can react more quickly to troop movements and changes to the battlefield.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>N/A</p>
      </div>
    </details>

    <!-- SIEGE -->
    <details class="objective">
      <summary>Siege Emplacements</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Defensive structures set up to guard critical installations or chokepoints, requiring strategic planning to breach. This can be eg. bunkers, trench lines, etc.</p>
        <h3>Why does it exist?</h3>
        <p>Deny or delay access to critical installations. Secured base of fire to deter attackers.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Friendly troops can more easily approach the target location.</li>
              <li>Captured Siege Emplacements can be repurposed for own needs.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Secured base of fire can severely damage attacking parties even after pushing past.</li>
              <li>Friendly reinforcements will be hindered in their attempt to support the leading force.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>N/A</p>
      </div>
    </details>

    <!-- LISTENING POSTS -->
    <details class="objective">
      <summary>Covert Listening Posts</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Small, hidden stations equipped with surveillance equipment, used to eavesdrop on communications or gather intelligence without detection.</p>
        <h3>Why does it exist?</h3>
        <p>Gather information about troop movements in a clandestine fashion.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Disrupts the enemy intel network.</li>
              <li>Delayed responses to friendly troop movements.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Enemy can better prepare for incoming attacks.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>N/A</p>
      </div>
    </details>

    <!-- CHEMICAL / BIOLOGICAL -->
    <details class="objective">
      <summary>Chemical/Biological Research Facility</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>A secretive installation where the enemy conducts research or production of chemical or biological weapons, requiring careful handling to prevent catastrophe.</p>
        <h3>Why does it exist?</h3>
        <p>Research to be able to produce chemical/biological weapons.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Prevents the enemy deploying chemical/biological weapons.</li>
              <li>Securing the research data may allow friendly troops to access the weapons in development for own purposes.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Enemy may be able to deploy chemical/biological weapons to significantly harm friendly forces.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>Could be linked to an Illegal Resource Extraction Site which supplies the necessary research materials.</p>
      </div>
    </details>

    <!-- ILLEGAL RESOURCE EXTRACTION -->
    <details class="objective">
      <summary>Illegal Resource Extraction Sites</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Unauthorised mining or resource collection operations that exploit natural resources for the enemy's gain, leading to environmental concerns or economic disruption.</p>
        <h3>Why does it exist?</h3>
        <p>Secure funds to finance the war machine. Gather materials for chemical/biological weapons research.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Able to transfer funds to friendly forces.</li>
              <li>Lack of funding may degrade enemy’s combat performance.</li>
              <li>Lack of research material may considerably slow enemy research efforts.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Continued stream of funds can lead to improved combat effectiveness.</li>
              <li>Supply of research materials may expedite enemy research efforts.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>N/A</p>
      </div>
    </details>

    <!-- VIP SAFE HOUSES -->
    <details class="objective">
      <summary>VIP Safe Houses</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Secured locations where high-ranking enemy officials or informants reside, requiring stealthy infiltration or extraction operations.</p>
        <h3>Why does it exist?</h3>
        <p>Keep HVTs in a secure facility. “Safe haven” to retreat HVTs back to.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Gain access to HVTs and their information.</li>
              <li>Disrupt enemy leadership by eliminating key figures.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Enemy’s upper command remains intact and their combat effectiveness is not reduced.</li>
              <li>Valuable information is lost.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>N/A</p>
      </div>
    </details>

    <!-- AIR DEFENSE -->
    <details class="objective">
      <summary>Air Defense Batteries</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Weapon emplacements situated in the vicinity of sensitive installations, equipped with anti-air guns or missiles to defend against air attacks.</p>
        <h3>Why does it exist?</h3>
        <p>Deny/hinder aerial superiority efforts. Protect sensitive installation against aerial attacks.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Easier access to enemy airspace.</li>
              <li>Less friendly aircraft casualties.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Significantly more difficult for friendly forces to attain aerial superiority.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>N/A</p>
      </div>
    </details>

    <!-- INFRASTRUCTURE -->
    <details class="objective">
      <summary>Infrastructure Targets</summary>
      <div class="objective-content">
        <h3>Description</h3>
        <p>Critical infrastructure such as power plants, water treatment facilities, or bridges vital for the enemy faction's control or logistical support.</p>
        <h3>Why does it exist?</h3>
        <p>Essential for enemy’s battlefield logistics and control over civilian population.</p>
        <h3>Consequences of Completion/Failure</h3>
        <div class="effects">
          <div>
            <h4>Completion</h4>
            <ul>
              <li>Weakens enemy’s control over the local population.</li>
              <li>Degrades enemy’s logistics and slows/destroys their supply routes.</li>
            </ul>
          </div>
          <div>
            <h4>Failure</h4>
            <ul>
              <li>Enemy retains strong control over the local population.</li>
              <li>Highly effective logistics due to well established infrastructure.</li>
            </ul>
          </div>
        </div>
        <h3>Additional Notes</h3>
        <p>An interesting point to consider might be how the local civilians would react to their (civilian) infrastructure getting destroyed.</p>
      </div>
    </details>

  </div>

  <p id="noObjectives" hidden>No objectives found.</p>
</div>

<style>
.objective-chart {
  width: 100%;
  color: var(--text-color, #e5e7eb);
}

.objective-header {
  margin-bottom: 20px;
}

.objective-header h2 {
  margin-bottom: 5px;
}

.objective-header p {
  opacity: 0.7;
  margin-bottom: 15px;
}

#objectiveSearch {
  box-sizing: border-box;
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--border-color, #444);
  border-radius: 8px;
  background: var(--code-background, #20242c);
  color: inherit;
  font-size: 15px;
}

#objectiveSearch:focus {
  outline: 2px solid var(--link-color, #4b9eff);
  outline-offset: 2px;
}

.objective {
  margin-bottom: 10px;
  border: 1px solid var(--border-color, #444);
  border-radius: 8px;
  background: var(--card-background, #1c2028);
  overflow: hidden;
}

.objective summary {
  cursor: pointer;
  padding: 16px;
  font-weight: 600;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.objective summary::-webkit-details-marker {
  display: none;
}

.objective summary::after {
  content: "+";
  font-size: 20px;
  opacity: 0.7;
}

.objective[open] summary::after {
  content: "−";
}

.objective summary:hover {
  background: rgba(128, 128, 128, 0.12);
}

.objective-content {
  padding: 5px 18px 18px;
  border-top: 1px solid var(--border-color, #444);
}

.objective-content h3 {
  font-size: 15px;
  margin: 18px 0 7px;
}

.objective-content p,
.objective-content li {
  line-height: 1.6;
  font-size: 14px;
}

.objective-content ul {
  padding-left: 20px;
}

.effects {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.effects > div {
  padding: 12px;
  border-radius: 7px;
  background: rgba(128, 128, 128, 0.09);
}

.effects h4 {
  margin: 0 0 8px;
  font-size: 14px;
}

.effects ul {
  margin-bottom: 0;
}

#noObjectives {
  text-align: center;
  padding: 20px;
  opacity: 0.7;
}

@media (max-width: 600px) {
  .effects {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
(function () {
  const search = document.getElementById("objectiveSearch");
  const list = document.getElementById("objectiveList");
  const empty = document.getElementById("noObjectives");

  if (!search || !list || !empty) return;

  const objectives = Array.from(
    list.querySelectorAll(".objective")
  );

  search.addEventListener("input", function () {
    const query = search.value.trim().toLowerCase();
    let visible = 0;

    objectives.forEach(function (objective) {
      const matches = objective.textContent
        .toLowerCase()
        .includes(query);

      objective.hidden = !matches;

      if (matches) visible++;
    });

    empty.hidden = visible !== 0;
  });
})();
</script>


## Additional Notes

Id libero condimentum vestibulum
