import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const PrivacyAndPolicy = () => {
    return (
        <div className="min-h-screen bg-background py-10 px-4">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Page Header */}
                <div className="text-center space-y-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                        Privacy Policy
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                {/* Introduction */}
                <Card>
                    <CardHeader>
                        <CardTitle>Introduction</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                        <p>
                            Welcome to <span className="font-medium text-foreground">Flash Drop</span>.
                            Your privacy is important to us. This Privacy Policy explains how we collect,
                            use, and protect your personal information when you use our parcel delivery
                            and tracking services.
                        </p>
                        <p>
                            By using our website or services, you agree to the practices described in this policy.
                        </p>
                    </CardContent>
                </Card>

                {/* Information We Collect */}
                <Card>
                    <CardHeader>
                        <CardTitle>Information We Collect</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-4">
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">
                                Personal Information
                            </h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Name, phone number, and email address</li>
                                <li>Pickup and delivery addresses</li>
                                <li>Parcel tracking IDs</li>
                                <li>Payment information (handled securely by third-party providers)</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-foreground mb-1">
                                Non-Personal Information
                            </h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>IP address and browser type</li>
                                <li>Device and usage information</li>
                                <li>Cookies and analytics data</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* How We Use Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>How We Use Your Information</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                            <li>To process and deliver parcels</li>
                            <li>To provide real-time parcel tracking</li>
                            <li>To communicate delivery updates and notifications</li>
                            <li>To improve our services and customer experience</li>
                            <li>To ensure security and prevent fraud</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Information Sharing */}
                <Card>
                    <CardHeader>
                        <CardTitle>Information Sharing</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                        <p>
                            We do not sell or rent your personal information. We may share your data only with:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Delivery partners and logistics providers</li>
                            <li>Payment processors</li>
                            <li>Legal authorities if required by law</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Data Security */}
                <Card>
                    <CardHeader>
                        <CardTitle>Data Security</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        <p>
                            We implement appropriate technical and organizational measures to protect
                            your personal data against unauthorized access, loss, or misuse.
                        </p>
                    </CardContent>
                </Card>

                {/* Cookies */}
                <Card>
                    <CardHeader>
                        <CardTitle>Cookies</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        <p>
                            Our website uses cookies to enhance user experience, analyze usage,
                            and improve service performance. You can manage cookie preferences
                            through your browser settings.
                        </p>
                    </CardContent>
                </Card>

                {/* User Rights */}
                <Card>
                    <CardHeader>
                        <CardTitle>Your Rights</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Access your personal data</li>
                            <li>Request correction or deletion</li>
                            <li>Withdraw consent where applicable</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Contact */}
                <Card>
                    <CardHeader>
                        <CardTitle>Contact Us</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        <p>
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <p className="mt-2">
                            📧 Email: <span className="font-medium text-foreground">bulbulahammedriad@gmail.com</span>
                        </p>
                        <p>
                            📍 Address: <span className="font-medium text-foreground">Cumilla, Bangladesh</span>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default PrivacyAndPolicy;