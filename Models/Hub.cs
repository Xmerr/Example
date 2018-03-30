using System;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace Example.Models
{
	public class ChatHub : Hub
	{
		// Sends the passed in from / message to all other clients
		public void Send(string from, string message)
		{
			Clients.Others.addMessage(from, message);
		}
	}
}