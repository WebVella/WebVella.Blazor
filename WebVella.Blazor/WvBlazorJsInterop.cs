using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace WebVella.Blazor
{
	public class WvBlazorJsInterop
	{
			public ValueTask<bool> SetCssLink(IJSRuntime jsRuntime, string fileName)
        {
            return jsRuntime.InvokeAsync<bool>("WebVellaBlazor.SetCssLink",fileName);
        }

			public ValueTask<bool> SetJsScript(IJSRuntime jsRuntime, string fileName)
        {
            return jsRuntime.InvokeAsync<bool>("WebVellaBlazor.SetJsScript",fileName);
        }
	}
}
