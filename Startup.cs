using Owin;
using Microsoft.Owin;

[assembly: OwinStartup(typeof(Example.Startup))]
namespace Example
{
	public class Startup
	{
		public void Configuration(IAppBuilder app)
		{
			app.MapSignalR();
		}
	}
}