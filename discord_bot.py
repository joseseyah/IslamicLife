import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.messages = True
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user.name}')

async def send_discord_message(username, message):
    user = await bot.fetch_user(username)
    await user.send(message)

def run_discord_bot():
    # Replace 'YOUR_BOT_TOKEN' with your actual bot token
    bot.run("MTE2Nzg2NTMwMzIwMDQ0MDQzMQ.GBcsSr.XTx2G6-Ymu8zuBfx1FWkVCMuLCOQlx5qLwnkcY")

if __name__ == '__main__':
    run_discord_bot()
