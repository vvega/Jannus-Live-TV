package tv.jannuslive.jltv;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.kroll.common.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public final class JltvAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	public JltvAppInfo(TiApplication app) {
		TiProperties properties = app.getSystemProperties();
		TiProperties appProperties = app.getAppProperties();
					
					properties.setString("ti.ui.defaultunit", "system");
					appProperties.setString("ti.ui.defaultunit", "system");
					
					properties.setString("ti.deploytype", "test");
					appProperties.setString("ti.deploytype", "test");
	}
	
	public String getId() {
		return "tv.jannuslive.jltv";
	}
	
	public String getName() {
		return "JLTV";
	}
	
	public String getVersion() {
		return "1.0";
	}
	
	public String getPublisher() {
		return "Veronica";
	}
	
	public String getUrl() {
		return "http://www.jannuslive.tv";
	}
	
	public String getCopyright() {
		return "2013 by Veronica";
	}
	
	public String getDescription() {
		return "not specified";
	}
	
	public String getIcon() {
		return "appicon.png";
	}
	
	public boolean isAnalyticsEnabled() {
		return true;
	}
	
	public String getGUID() {
		return "aa25d243-8fd7-4cdf-926f-0e51679f7413";
	}
	
	public boolean isFullscreen() {
		return false;
	}
	
	public boolean isNavBarHidden() {
		return false;
	}
}
