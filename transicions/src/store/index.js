import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

const movies = ()=> {
  return[{
    "id":1,"title":"Snow Angels","last_name":"Heinl","description":"Insertion of Internal Fixation Device into Right Metacarpocarpal Joint, Percutaneous Approach","available":true},
  {"id":2,"title":"American Graffiti","last_name":"Livett","description":"Drainage of Sigmoid Colon with Drainage Device, Via Natural or Artificial Opening","available":true},
  {"id":3,"title":"Little Hamlet","last_name":"Wakeman","description":"Inspection of Left Sternoclavicular Joint, Open Approach","available":true},
  {"id":4,"title":"Milius","last_name":"Dale","description":"Planar Nuclear Medicine Imaging of Bone Marrow using Indium 111 (In-111)","available":false},
  {"id":5,"title":"Happily Ever After (Ils se marièrent et eurent beaucoup d'enfants)","last_name":"Jaukovic","description":"Transfer Oculomotor Nerve to Facial Nerve, Open Approach","available":true},
  {"id":6,"title":"Jackass: The Movie","last_name":"Lowden","description":"Drainage of Lesser Omentum, Open Approach","available":false},
  {"id":7,"title":"Boondock Saints, The","last_name":"Livens","description":"Excision of Right Posterior Tibial Artery, Percutaneous Endoscopic Approach, Diagnostic","available":false},
  {"id":8,"title":"Happy Gilmore","last_name":"Pressey","description":"Reposition Right Tympanic Membrane, Via Natural or Artificial Opening Endoscopic","available":true},
  {"id":9,"title":"Seventh Cross, The","last_name":"Bocock","description":"Robotic Assisted Procedure of Trunk Region, Percutaneous Approach","available":false},
  {"id":10,"title":"Ranma ½: Nihao My Concubine (Ranma ½: Kessen Tôgenkyô! Hanayome o torimodose!!)","last_name":"Hazelden","description":"Hyperthermia of Hemibody","available":false},
  {"id":11,"title":"Camera Obscura","last_name":"Spino","description":"Occlusion of Left Lacrimal Duct, Percutaneous Approach","available":false},
  {"id":12,"title":"Sleeping Dictionary, The","last_name":"Baggaley","description":"Repair Left Sphenoid Bone, External Approach","available":true},
  {"id":13,"title":"Stevie","last_name":"Shillito","description":"Extirpation of Matter from Left Femoral Artery, Percutaneous Endoscopic Approach","available":true},
  {"id":14,"title":"All the King's Men","last_name":"Haking","description":"Computerized Tomography (CT Scan) of Pelvic Region using Low Osmolar Contrast, Unenhanced and Enhanced","available":true},
  {"id":15,"title":"Filmistaan","last_name":"Pimbley","description":"Change Female Genital Tract Packing Material","available":true},
  {"id":16,"title":"Meeting Evil","last_name":"Ploughwright","description":"Drainage of Right Renal Artery, Open Approach, Diagnostic","available":true},
  {"id":17,"title":"My Demon Lover","last_name":"Lathey","description":"Inspection of Left Acromioclavicular Joint, Percutaneous Approach","available":false},
  {"id":18,"title":"Hot Rod","last_name":"Astlett","description":"Transfer Perineum Tendon, Open Approach","available":false},
  {"id":19,"title":"Overbrook Brothers, The","last_name":"Stoffers","description":"Bypass Abdominal Aorta to Bilateral Renal Artery with Synthetic Substitute, Open Approach","available":false},
  {"id":20,"title":"Radio Flyer","last_name":"Peppett","description":"Destruction of Middle Esophagus, Percutaneous Approach","available":false},
  {"id":21,"title":"Into the Storm","last_name":"Ranfield","description":"Transfusion of Autologous Antihemophilic Factors into Peripheral Artery, Open Approach","available":true},
  {"id":22,"title":"All the Way Home","last_name":"Connew","description":"Electrocochleography Assessment","available":true},
  {"id":23,"title":"Anne of Green Gables","last_name":"Kenzie","description":"Removal of Drainage Device from Right Pleural Cavity, Percutaneous Endoscopic Approach","available":false},
  {"id":24,"title":"In Fear","last_name":"Ace","description":"Magnetic Resonance Imaging (MRI) of Left Hand/Finger Joint using Other Contrast","available":true},
  {"id":25,"title":"Rosewood Lane","last_name":"Cursey","description":"Drainage of Right Foot Muscle with Drainage Device, Percutaneous Endoscopic Approach","available":true},
  {"id":26,"title":"Berserk: The Golden Age Arc 2 - The Battle for Doldrey","last_name":"Giron","description":"Low Dose Rate (LDR) Brachytherapy of Uterus using Other Isotope","available":false},
  {"id":27,"title":"Carmina and Amen (Carmina y amén)","last_name":"Challender","description":"Bypass Left Kidney Pelvis to Ileum with Synthetic Substitute, Open Approach","available":false},
  {"id":28,"title":"Hollywood Ending","last_name":"Lummasana","description":"Detachment at Left Foot, Complete 3rd Ray, Open Approach","available":true},
  {"id":29,"title":"Suspended Vocation, The (La vocation suspendue)","last_name":"Cashin","description":"Release Left Hip Muscle, Open Approach","available":true},
  {"id":30,"title":"Handle with Care (a.k.a. Citizen's Band)","last_name":"Horley","description":"Reposition Right Femoral Artery, Percutaneous Endoscopic Approach","available":false},
  {"id":31,"title":"Never Ever! (Nigdy w zyciu!)","last_name":"Roby","description":"Insertion of Intracardiac Pacemaker into Right Ventricle, Percutaneous Endoscopic Approach","available":false},
  {"id":32,"title":"Cyborg Girl (Boku no kanojo wa saibôgu)","last_name":"Adamoli","description":"Release Left Pelvic Bone, Open Approach","available":true},
  {"id":33,"title":"Track 29","last_name":"Phayre","description":"Removal of Synthetic Substitute from Left Metacarpocarpal Joint, Percutaneous Approach","available":true},
  {"id":34,"title":"Guess Who","last_name":"Birkwood","description":"Bypass Right Greater Saphenous Vein to Lower Vein with Autologous Arterial Tissue, Percutaneous Endoscopic Approach","available":false},
  {"id":35,"title":"Pollock","last_name":"Eastop","description":"Replacement of Left Glenoid Cavity with Autologous Tissue Substitute, Open Approach","available":false},
  {"id":36,"title":"Lorenzo's Oil","last_name":"Brandino","description":"Bypass Left Femoral Artery to Foot Artery with Autologous Venous Tissue, Open Approach","available":false},
  {"id":37,"title":"Just Around the Corner","last_name":"Waugh","description":"Introduction of Platelet Inhibitor into Central Artery, Open Approach","available":false},
  {"id":38,"title":"Peking Opera Blues (Do ma daan)","last_name":"Errowe","description":"Drainage of Larynx, Via Natural or Artificial Opening","available":false},
  {"id":39,"title":"Patty Hearst","last_name":"Gilleson","description":"Supplement Right Basilic Vein with Autologous Tissue Substitute, Open Approach","available":false},
  {"id":40,"title":"Shaggy Dog, The","last_name":"Banishevitz","description":"Dilation of Right Pulmonary Vein with Drug-eluting Intraluminal Device, Percutaneous Approach","available":true},
  {"id":41,"title":"Andalusian Dog, An (Chien andalou, Un)","last_name":"Matt","description":"Occlusion of Lingula Bronchus, Via Natural or Artificial Opening Endoscopic","available":true},
  {"id":42,"title":"Lair of the White Worm, The","last_name":"Scully","description":"Low Dose Rate (LDR) Brachytherapy of Uterus using Californium 252 (Cf-252)","available":false},
  {"id":43,"title":"Charlie Chan's Courage","last_name":"Birdwhistell","description":"Fusion of Right Sternoclavicular Joint with Autologous Tissue Substitute, Percutaneous Endoscopic Approach","available":false},
  {"id":44,"title":"Any Number Can Play","last_name":"Sherlaw","description":"Insertion of Spacer into Thoracolumbar Vertebral Joint, Open Approach","available":true},
  {"id":45,"title":"Purple Ball, The (Lilovyy shar)","last_name":"Lebourn","description":"Extirpation of Matter from Left Hip Tendon, Percutaneous Approach","available":true},
  {"id":46,"title":"Godzilla vs. The Sea Monster (Gojira-Ebira-Mosura: Nankai no daiketto)","last_name":"Medendorp","description":"Occlusion of Left Vertebral Artery with Intraluminal Device, Open Approach","available":true},
  {"id":47,"title":"Lassie","last_name":"Hepher","description":"Removal of Other Device from Left Upper Extremity, Percutaneous Approach","available":false},
  {"id":48,"title":"Good Guys Wear Black","last_name":"Buche","description":"Removal of Radioactive Element from Neck, Percutaneous Approach","available":true},
  {"id":49,"title":"Million Dollar Duck, The (a.k.a. $1,000,000 Duck)","last_name":"Warmington","description":"Repair Left Axillary Artery, Open Approach","available":false},
  {"id":50,"title":"Right Kind of Wrong, The","last_name":"Mulloch","description":"Supplement Left Scapula with Nonautologous Tissue Substitute, Percutaneous Approach","available":true},
  {"id":51,"title":"Flightplan","last_name":"Greggs","description":"Revision of Autologous Tissue Substitute in Left Hip Joint, Percutaneous Approach","available":false},
  {"id":52,"title":"Trans-Europ-Express","last_name":"Nail","description":"Drainage of Left Hand Tendon, Percutaneous Endoscopic Approach","available":true},
  {"id":53,"title":"Bride from Hades, The (Botan-dôrô) (Peony Lantern) (Tale of Peonies and Lanterns, A)","last_name":"Gradwell","description":"Supplement Azygos Vein with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach","available":true},
  {"id":54,"title":"Silent House","last_name":"Hully","description":"Plaque Radiation of Maxilla","available":false},
  {"id":55,"title":"I'm Not Scared (Io non ho paura)","last_name":"Arsnell","description":"Introduction of Other Antineoplastic into Biliary and Pancreatic Tract, Percutaneous Approach","available":false},
  {"id":56,"title":"Deep Red (Profondo rosso)","last_name":"Gilfether","description":"Bypass Bladder to Ileocutaneous with Autologous Tissue Substitute, Open Approach","available":true},
  {"id":57,"title":"Criminal Justice","last_name":"Moreby","description":"Bypass Superior Vena Cava to Right Pulmonary Artery with Synthetic Substitute, Open Approach","available":false},
  {"id":58,"title":"Money Matters ","last_name":"Cashell","description":"Fusion of 8 or more Thoracic Vertebral Joints with Autologous Tissue Substitute, Anterior Approach, Anterior Column, Open Approach","available":true},
  {"id":59,"title":"New Jersey Drive","last_name":"Bremen","description":"Excision of Right Pelvic Bone, Percutaneous Endoscopic Approach","available":false},
  {"id":60,"title":"Bad News Bears","last_name":"Radeliffe","description":"Extirpation of Matter from Left Eustachian Tube, Via Natural or Artificial Opening Endoscopic","available":true},
  {"id":61,"title":"Golden Boys, The","last_name":"Spear","description":"Excision of Right Knee Bursa and Ligament, Open Approach","available":false},
  {"id":62,"title":"Better Living","last_name":"Nobbs","description":"Revision of Internal Fixation Device in Left Carpal, Percutaneous Endoscopic Approach","available":false},
  {"id":63,"title":"Man with Two Brains, The","last_name":"Greenham","description":"Excision of Common Bile Duct, Percutaneous Endoscopic Approach","available":false},
  {"id":64,"title":"Quatsch und die Nasenbärbande","last_name":"Haley","description":"Reposition Left Thumb Phalanx, Percutaneous Approach","available":false},
  {"id":65,"title":"World According to Sesame Street, The","last_name":"Whittington","description":"Bypass Left Axillary Artery to Right Lower Leg Artery with Autologous Venous Tissue, Open Approach","available":false},
  {"id":66,"title":"Fish Child, The (El niño pez)","last_name":"Moulsdall","description":"Excision of Aortic Lymphatic, Percutaneous Approach","available":false},
  {"id":67,"title":"Monkey Trouble","last_name":"Wilcox","description":"Dilation of Right Cephalic Vein, Percutaneous Endoscopic Approach","available":true},
  {"id":68,"title":"T-Rex: Back to the Cretaceous","last_name":"Mabb","description":"Excision of Right Vas Deferens, Percutaneous Approach, Diagnostic","available":false},
  {"id":69,"title":"I Accuse","last_name":"Zecchetti","description":"Supplement Heart with Nonautologous Tissue Substitute, Percutaneous Approach","available":true},
  {"id":70,"title":"Black Moon","last_name":"Shapcott","description":"Removal of Infusion Device from Liver, External Approach","available":false},
  {"id":71,"title":"Union, The","last_name":"Cuddehay","description":"Supplement Ileum with Nonautologous Tissue Substitute, Open Approach","available":false},
  {"id":72,"title":"Dry Cleaning (Nettoyage à sec)","last_name":"Wholesworth","description":"Reposition Right Hip Joint with External Fixation Device, Open Approach","available":true},
  {"id":73,"title":"Kaleidoscope","last_name":"Hearnden","description":"Bypass Cerebral Ventricle to Atrium with Autologous Tissue Substitute, Open Approach","available":true},
  {"id":74,"title":"Afro Samurai: Resurrection","last_name":"Beckles","description":"Bypass Right Pulmonary Artery from Innominate Artery with Autologous Venous Tissue, Percutaneous Endoscopic Approach","available":false},
  {"id":75,"title":"Hijacking Catastrophe: 9/11, Fear & the Selling of American Empire","last_name":"Farrell","description":"Range of Motion and Joint Mobility Treatment of Integumentary System - Whole Body using Other Equipment","available":false},
  {"id":76,"title":"Mother's Courage: Talking Back to Autism, A","last_name":"Helversen","description":"Bypass Accessory Pancreatic Duct to Large Intestine, Percutaneous Endoscopic Approach","available":true},
  {"id":77,"title":"Wildflowers","last_name":"Tarrant","description":"Drainage of Left Posterior Tibial Artery, Open Approach, Diagnostic","available":false},
  {"id":78,"title":"Grand Masti","last_name":"McCrystal","description":"Release Left Abdomen Bursa and Ligament, Percutaneous Endoscopic Approach","available":true},
  {"id":79,"title":"Capture of Bigfoot, The","last_name":"Sharpe","description":"Insertion of Infusion Device into Left Popliteal Artery, Percutaneous Endoscopic Approach","available":true},
  {"id":80,"title":"Rocky VI ","last_name":"Philipet","description":"Tomographic (Tomo) Nuclear Medicine Imaging of Abdomen and Pelvis using Technetium 99m (Tc-99m)","available":true},
  {"id":81,"title":"Poltergeist III","last_name":"Ladewig","description":"Magnetic Resonance Imaging (MRI) of Bilateral Breasts","available":true},
  {"id":82,"title":"El Cid","last_name":"MacCahey","description":"Fusion of Cervical Vertebral Joint with Nonautologous Tissue Substitute, Posterior Approach, Posterior Column, Open Approach","available":false},
  {"id":83,"title":"Investigation of a Citizen Above Suspicion (Indagine su un cittadino al di sopra di ogni sospetto)","last_name":"Ekkel","description":"Division of Tongue, Palate, Pharynx Muscle, Percutaneous Approach","available":true},
  {"id":84,"title":"Bob Funk","last_name":"Lodemann","description":"Extraction of Vertebral Bone Marrow, Open Approach","available":true},
  {"id":85,"title":"Bread and Tulips (Pane e tulipani)","last_name":"Clifforth","description":"Supplement Rectum with Autologous Tissue Substitute, Open Approach","available":true},
  {"id":86,"title":"Finances of the Grand Duke, The (Die Finanzen des Großherzogs)","last_name":"Mohring","description":"Release Right Peroneal Artery, Percutaneous Approach","available":false},
  {"id":87,"title":"Bossa Nova","last_name":"Pelosi","description":"Removal of Interbody Fusion Device from Lumbosacral Joint, Percutaneous Endoscopic Approach","available":false},
  {"id":88,"title":"Land of Silence and Darkness (Land des Schweigens und der Dunkelheit)","last_name":"Coleborn","description":"Excision of Right Glenoid Cavity, Open Approach, Diagnostic","available":false},
  {"id":89,"title":"Under the Roofs of Paris (Sous les toits de Paris)","last_name":"Tuff","description":"Supplement Thoracic Vertebral Joint with Autologous Tissue Substitute, Open Approach","available":true},
  {"id":90,"title":"Pretty Devils","last_name":"Tunkin","description":"Removal of Drainage Device from Cranial Nerve, Open Approach","available":true},
  {"id":91,"title":"Support Your Local Gunfighter","last_name":"Hanington","description":"Drainage of Subarachnoid Space, Open Approach, Diagnostic","available":false},
  {"id":92,"title":"Fight, Zatoichi, Fight (Zatôichi kesshô-tabi) (Zatôichi 8)","last_name":"Cawdell","description":"Bypass Bilateral Ureters to Colon, Percutaneous Endoscopic Approach","available":false},
  {"id":93,"title":"Tiny Furniture","last_name":"Stanbro","description":"Bypass Superior Vena Cava to Right Pulmonary Artery with Autologous Venous Tissue, Open Approach","available":true},
  {"id":94,"title":"Jab We Met","last_name":"Loynton","description":"Supplement Right Tunica Vaginalis with Autologous Tissue Substitute, Percutaneous Endoscopic Approach","available":false},
  {"id":95,"title":"Desperation","last_name":"Chicchetto","description":"Change Drainage Device in Kidney, External Approach","available":true},
  {"id":96,"title":"Little Miss Sunshine","last_name":"Tripp","description":"Magnetic Resonance Imaging (MRI) of Bilateral Renal Veins using Other Contrast","available":false},
  {"id":97,"title":"Strange Days","last_name":"Redmond","description":"Excision of Left Knee Tendon, Open Approach","available":true},
  {"id":98,"title":"Perfect Murder, The","last_name":"Clemenceau","description":"Occlusion of Right Femoral Vein with Extraluminal Device, Open Approach","available":false},
  {"id":99,"title":"Toy Story","last_name":"Mahood","description":"Bypass Left Ureter to Bladder with Autologous Tissue Substitute, Open Approach","available":false},
  {"id":100,"title":"In Bruges","last_name":"Knowlson","description":"Removal of Tracheostomy Device from Trachea, Via Natural or Artificial Opening","available":true}]
};
export default new Vuex.Store({
  state: {
    movies: movies(),
    filter:{
      query: '',
      available: true
    }
  },
  mutations: {
    SET_QUERY (state, query){
      state.filter.query = query;
    },
    SET_AVAILABLE (state){
      state.filter.available = ! state.filter.available;
    }
  },
  getters:{

    filteredMovies (state){
      let movies = state.movies.filter(movie => movie.available === state.filter.available);
      if (state.filter.query.length > 2) {
        return movies.filter(movie => movie.title.toLowerCase().includes(state.filter.query));
      }
      return movies;
    }
  }
})
