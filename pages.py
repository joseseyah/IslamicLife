from flask import Blueprint,render_template

pages = Blueprint("pages",__name__)

@pages.route("/", methods = ["GET"])
def home():
    return render_template("index.html")

@pages.route("/aboutpage", methods=["GET"])
def about():
    return render_template("about.html")

@pages.route("/events", methods=["GET"])
def event():
    return render_template("events.html")

@pages.route("/prayertimes", methods=["GET"])
def prayertimes():
    return render_template("trainers.html")

@pages.route("/restaurants", methods=["GET"])
def restaurants():
    return render_template("pricing.html")

@pages.route("/mosques", methods=["GET"])
def mosques():
    return render_template("courses.html")

@pages.route("/forum", methods=["GET"])
def forum():
    return render_template("contact.html")

@pages.route("/Juz1", methods=["GET"])
def j1():
    return render_template("Juz_1.html")

@pages.route("/Juz2", methods=["GET"])
def j2():
    return render_template("Juz_2.html")

@pages.route("/Juz3", methods=["GET"])
def j3():
    return render_template("Juz_3.html")

@pages.route("/Juz4", methods=["GET"])
def j4():
    return render_template("Juz_4.html")

@pages.route("/Juz5", methods=["GET"])
def j5():
    return render_template("Juz_5.html")

@pages.route("/Juz6", methods=["GET"])
def j6():
    return render_template("Juz_6.html")

@pages.route("/Juz7", methods=["GET"])
def j7():
    return render_template("Juz_7.html")

@pages.route("/Juz8", methods=["GET"])
def j8():
    return render_template("Juz_8.html")

@pages.route("/Juz9", methods=["GET"])
def j9():
    return render_template("Juz_9.html")

@pages.route("/Juz10", methods=["GET"])
def j10():
    return render_template("Juz_10.html")

@pages.route("/Juz11", methods=["GET"])
def j11():
    return render_template("Juz_11.html")

@pages.route("/Juz12", methods=["GET"])
def j12():
    return render_template("Juz_12.html")

@pages.route("/Juz13", methods=["GET"])
def j13():
    return render_template("Juz_13.html")

@pages.route("/Juz14", methods=["GET"])
def j14():
    return render_template("Juz_14.html")

@pages.route("/Juz15", methods=["GET"])
def j15():
    return render_template("Juz_15.html")

@pages.route("/Juz16", methods=["GET"])
def j16():
    return render_template("Juz_16.html")

@pages.route("/Juz17", methods=["GET"])
def j17():
    return render_template("Juz_17.html")

@pages.route("/Juz18", methods=["GET"])
def j18():
    return render_template("Juz_18.html")

@pages.route("/Juz19", methods=["GET"])
def j19():
    return render_template("Juz_19.html")

@pages.route("/Juz20", methods=["GET"])
def j20():
    return render_template("Juz_20.html")

@pages.route("/Juz21", methods=["GET"])
def j21():
    return render_template("Juz_21.html")

@pages.route("/Juz22", methods=["GET"])
def j22():
    return render_template("Juz_22.html")

@pages.route("/Juz23", methods=["GET"])
def j23():
    return render_template("Juz_23.html")

@pages.route("/Juz24", methods=["GET"])
def j24():
    return render_template("Juz_24.html")

@pages.route("/Juz25", methods=["GET"])
def j25():
    return render_template("Juz_25.html")

@pages.route("/Juz26", methods=["GET"])
def j26():
    return render_template("Juz_26.html")

@pages.route("/Juz27", methods=["GET"])
def j27():
    return render_template("Juz_27.html")

@pages.route("/Juz28", methods=["GET"])
def j28():
    return render_template("Juz_28.html")

@pages.route("/Juz29", methods=["GET"])
def j29():
    return render_template("Juz_29.html")

@pages.route("/Juz30", methods=["GET"])
def j30():
    return render_template("Juz_30.html")

@pages.route("/findpartner", methods=["GET"])
def findpartner():
    return render_template("findpartner.html")
