using System;

namespace WebVella.Blazor.Utils
{
	public class BlazorEventArgs : EventArgs
	{
		private readonly dynamic payload;
		public BlazorEventArgs(dynamic payload) { this.payload = payload; }
		public dynamic Payload { get { return payload; } }
	}

	public class Store
	{
		public static Store Current { get; set; } = new Store();

		public event EventHandler<BlazorEventArgs> BlazorEvent;

		public delegate void EventHandler(object sender, BlazorEventArgs e);

		public void SendBlazorEvent(object sender, BlazorEventArgs args ) => BlazorEvent?.Invoke(sender, args);
	}
}
