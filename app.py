# =====================================
# SmartBus Bus Reservation System
# Flask Backend API
# =====================================


from flask import Flask, request, jsonify

from flask_cors import CORS

from config import firebase_db



# Create Flask App

app = Flask(__name__)


# Enable CORS

CORS(app)




# Firebase Database Reference

db = firebase_db.reference()




# =====================================
# Home API
# =====================================


@app.route("/", methods=["GET"])
def home():

    return jsonify({

        "message":
        "SmartBus Backend Running Successfully"

    })





# =====================================
# CREATE BUS
# =====================================


@app.route("/addBus", methods=["POST"])

def add_bus():


    data = request.json


    bus_ref = db.child("buses").push(data)



    return jsonify({

        "message":"Bus Added Successfully",

        "bus_id":bus_ref.key

    })






# =====================================
# READ ALL BUSES
# =====================================


@app.route("/getBuses", methods=["GET"])

def get_buses():


    buses = db.child("buses").get()



    if buses:

        return jsonify(buses)


    else:

        return jsonify({})






# =====================================
# UPDATE BUS
# =====================================


@app.route("/updateBus/<bus_id>", methods=["PUT"])

def update_bus(bus_id):


    data = request.json



    db.child("buses").child(bus_id).update(data)



    return jsonify({

        "message":
        "Bus Updated Successfully"

    })







# =====================================
# DELETE BUS
# =====================================


@app.route("/deleteBus/<bus_id>", methods=["DELETE"])

def delete_bus(bus_id):


    db.child("buses").child(bus_id).delete()



    return jsonify({

        "message":
        "Bus Deleted Successfully"

    })








# =====================================
# GET USER BOOKINGS
# =====================================


@app.route("/bookings", methods=["GET"])

def get_bookings():


    bookings = db.child("bookings").get()



    if bookings:

        return jsonify(bookings)


    return jsonify({})








# =====================================
# ADD CONTACT MESSAGE
# =====================================


@app.route("/contact", methods=["POST"])

def contact():


    data = request.json


    db.child("contacts").push(data)



    return jsonify({

        "message":
        "Message Saved Successfully"

    })








# =====================================
# Run Server
# =====================================


if __name__ == "__main__":


    app.run(

        debug=True,

        host="0.0.0.0",

        port=5000

    )