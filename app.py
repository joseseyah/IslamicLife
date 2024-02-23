from flask import Flask, request, render_template
import requests
from pages import *
import discord
from discord.ext import commands

app = Flask(__name__)



welcome_discord_webhook = "https://discord.com/api/webhooks/1168003429562601482/JxZ2bepc0Rzo642eM1iLKb_er79xK7XVsr5pIrg5QyLSfpT9lB8x-IKEgMjBoRse5hoh"


# Discord bot setup
intents = discord.Intents.default()
intents.messages = True
bot = commands.Bot(command_prefix="!", intents=intents)


# Flask route to handle form submission
@app.route('/subscribe', methods=['POST'])
def subscribe():
    username = request.form.get('username')
    discord_message = f"Hello, {username}! Thanks for subscribing to Quran reminders."

    send_discord_message(username,discord_message)
    
    
    return f"Subscription successful! Welcome, {username}."

@app.route('/home')
def index():
    return render_template('index.html')

def send_discord_message(username, message):
    payload = {
        'content': f'**{username}**: {message}'
    }

    # Send POST request to Discord webhook URL
    requests.post(welcome_discord_webhook, json=payload)

if __name__ == '__main__':
    app.register_blueprint(pages, url_prefix="/")
    app.run(debug=False, host='0.0.0.0')
