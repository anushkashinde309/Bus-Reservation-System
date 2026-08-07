# =====================================
# SmartBus Bus Reservation System
# Firebase Backend Configuration
# =====================================

import os
import firebase_admin
from firebase_admin import credentials, db

# -------------------------------------
# Path to Service Account Key
# -------------------------------------

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

SERVICE_ACCOUNT_FILE = os.path.join(
    BASE_DIR,
    "serviceAccountKey.json"
)

# -------------------------------------
# Initialize Firebase
# -------------------------------------

if not firebase_admin._apps:

    cred = credentials.Certificate(SERVICE_ACCOUNT_FILE)

    firebase_admin.initialize_app(
        cred,
        {
            "databaseURL": "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com/"
        }
    )

# -------------------------------------
# Database Reference
# -------------------------------------

firebase_db = db

print("✅ Firebase Connected Successfully")